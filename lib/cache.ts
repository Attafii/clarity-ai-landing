import { env } from './env';
import { logger } from './logger';

// Simple in-memory cache for development
class InMemoryCache {
  private cache: Map<string, { value: any; expiresAt: number }> = new Map();

  set(key: string, value: any, ttl: number): void {
    const expiresAt = Date.now() + ttl;
    this.cache.set(key, { value, expiresAt });
    logger.debug('Cache set', { key, ttl });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);

    if (!entry) {
      logger.debug('Cache miss', { key });
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      logger.debug('Cache expired', { key });
      return null;
    }

    logger.debug('Cache hit', { key });
    return entry.value;
  }

  delete(key: string): void {
    this.cache.delete(key);
    logger.debug('Cache deleted', { key });
  }

  clear(): void {
    this.cache.clear();
    logger.debug('Cache cleared');
  }

  getStats(): { size: number; keys: string[] } {
    // Clean up expired entries
    const now = Date.now();
    const expiredKeys = Array.from(this.cache.entries())
      .filter(([_, entry]) => now > entry.expiresAt)
      .map(([key]) => key);

    expiredKeys.forEach((key) => this.cache.delete(key));

    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}

// Redis cache for production
class RedisCache {
  private baseUrl: string;
  private token: string;

  constructor(url: string, token: string) {
    this.baseUrl = url;
    this.token = token;
  }

  async set(key: string, value: any, ttl: number): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/set/${key}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      if (response.ok && ttl > 0) {
        // Set expiration
        await fetch(`${this.baseUrl}/expire/${key}/${Math.ceil(ttl / 1000)}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
      }

      logger.debug('Redis cache set', { key, ttl });
    } catch (error) {
      logger.warn('Redis cache set error', error, { key });
    }
  }

  async get(key: string): Promise<any | null> {
    try {
      const response = await fetch(`${this.baseUrl}/get/${key}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (!response.ok) {
        logger.debug('Redis cache miss', { key });
        return null;
      }

      const data = (await response.json()) as { result: any };
      if (data.result === null) {
        logger.debug('Redis cache miss', { key });
        return null;
      }

      logger.debug('Redis cache hit', { key });
      return data.result;
    } catch (error) {
      logger.warn('Redis cache get error', error, { key });
      return null;
    }
  }

  async delete(key: string): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/del/${key}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      logger.debug('Redis cache deleted', { key });
    } catch (error) {
      logger.warn('Redis cache delete error', error, { key });
    }
  }

  async clear(): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/flushall`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      logger.debug('Redis cache cleared');
    } catch (error) {
      logger.warn('Redis cache clear error', error);
    }
  }
}

// Factory function to create appropriate cache
function createCache() {
  if (
    env.NODE_ENV === 'production' &&
    env.UPSTASH_REDIS_REST_URL &&
    env.UPSTASH_REDIS_REST_TOKEN
  ) {
    logger.info('Using Redis cache (production)');
    return new RedisCache(env.UPSTASH_REDIS_REST_URL, env.UPSTASH_REDIS_REST_TOKEN);
  }

  logger.info('Using in-memory cache (development/test)');
  return new InMemoryCache();
}

export const cache = createCache();

/**
 * Cache a promise result
 * @param key Cache key
 * @param fetcher Async function to cache result of
 * @param ttl Time to live in milliseconds
 */
export async function cacheAsyncResult<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600000 // 1 hour default
): Promise<T> {
  try {
    // Try to get from cache
    const cached = await cache.get(key);
    if (cached !== null) {
      logger.debug('Returning cached result', { key });
      return cached;
    }

    // Fetch and cache
    logger.debug('Fetching and caching result', { key });
    const result = await fetcher();
    await cache.set(key, result, ttl);

    return result;
  } catch (error) {
    logger.error('Cache operation error', error, { key });
    // On error, just call fetcher directly
    return await fetcher();
  }
}

/**
 * Invalidate cache entries matching pattern
 * @param pattern Key pattern to match (simple wildcard: "prefix:*")
 */
export async function invalidateCache(pattern: string): Promise<void> {
  try {
    const stats = cache instanceof InMemoryCache ? (cache as any).getStats?.() : null;

    if (stats) {
      // In-memory: filter keys
      const regex = new RegExp('^' + pattern.replace('*', '.*') + '$');
      const keysToDelete = stats.keys.filter((k) => regex.test(k));

      for (const key of keysToDelete) {
        await cache.delete(key);
      }

      logger.info('Cache invalidated', { pattern, count: keysToDelete.length });
    } else {
      // Redis: would need pattern support
      logger.warn('Pattern-based invalidation not fully supported for Redis');
    }
  } catch (error) {
    logger.error('Cache invalidation error', error, { pattern });
  }
}
