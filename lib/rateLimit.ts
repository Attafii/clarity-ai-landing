import { NextRequest } from 'next/server';
import { env } from './env';
import { logger } from './logger';

// Simple in-memory rate limiting for development
class InMemoryRateLimiter {
  private limits: Map<string, { count: number; resetTime: number }> = new Map();
  private readonly windowMs: number;
  private readonly maxRequests: number;

  constructor(windowMs: number, maxRequests: number) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  check(key: string): boolean {
    const now = Date.now();
    const entry = this.limits.get(key);

    if (!entry || now > entry.resetTime) {
      this.limits.set(key, { count: 1, resetTime: now + this.windowMs });
      return true;
    }

    if (entry.count < this.maxRequests) {
      entry.count++;
      return true;
    }

    return false;
  }
}

// In-memory limiters for development
const contactLimiter = new InMemoryRateLimiter(3600000, 5); // 5 per hour
const newsletterLimiter = new InMemoryRateLimiter(86400000, 10); // 10 per day

/**
 * Rate limit middleware
 * Uses Upstash Redis in production, in-memory in development
 */
export async function checkRateLimit(
  request: NextRequest,
  endpoint: 'contact' | 'newsletter'
): Promise<{ success: boolean; remaining?: number; resetTime?: number }> {
  // Extract IP from headers (works with Vercel, proxies, etc)
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown';

  try {
    // In production, use Upstash (if configured)
    if (
      env.NODE_ENV === 'production' &&
      env.UPSTASH_REDIS_REST_URL &&
      env.UPSTASH_REDIS_REST_TOKEN
    ) {
      const response = await fetch(
        `${env.UPSTASH_REDIS_REST_URL}/incr/${endpoint}:${ip}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        logger.warn('Rate limit check failed', { endpoint, ip });
        // On error, allow the request
        return { success: true };
      }

      const data = (await response.json()) as { result: number };
      const count = data.result;

      // Set expiration on first request
      if (count === 1) {
        const ttl = endpoint === 'contact' ? 3600 : 86400; // 1 hour or 24 hours
        await fetch(
          `${env.UPSTASH_REDIS_REST_URL}/expire/${endpoint}:${ip}/${ttl}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`,
            },
          }
        );
      }

      const limit = endpoint === 'contact' ? 5 : 10;

      if (count > limit) {
        logger.warn('Rate limit exceeded', { endpoint, ip, count });
        return {
          success: false,
          remaining: 0,
        };
      }

      return {
        success: true,
        remaining: limit - count,
      };
    }

    // In development, use in-memory limiter
    const limiter = endpoint === 'contact' ? contactLimiter : newsletterLimiter;
    const success = limiter.check(ip);

    if (!success) {
      logger.warn('Rate limit exceeded (in-memory)', { endpoint, ip });
    }

    return { success };
  } catch (error) {
    logger.error('Rate limit check error', error, { endpoint, ip });
    // On error, allow the request
    return { success: true };
  }
}
