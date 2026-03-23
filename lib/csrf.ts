import { createHmac, randomBytes } from 'crypto';
import { env } from './env';
import { logger } from './logger';

/**
 * Generate a CSRF token
 */
export function generateCsrfToken(): string {
  const token = randomBytes(32).toString('hex');
  const timestamp = Date.now();
  const data = `${token}:${timestamp}`;

  const secret = env.CSRF_SECRET || 'default-secret-change-in-production';
  const hash = createHmac('sha256', secret).update(data).digest('hex');

  return `${data}:${hash}`;
}

/**
 * Verify a CSRF token
 */
export function verifyCsrfToken(token: string): boolean {
  try {
    const parts = token.split(':');
    if (parts.length !== 3) {
      logger.warn('CSRF token verification failed: invalid format');
      return false;
    }

    const [tokenPart, timestamp, hash] = parts;

    // Check if token is not too old (24 hours)
    const tokenAge = Date.now() - parseInt(timestamp, 10);
    if (tokenAge > 86400000) {
      logger.warn('CSRF token verification failed: token expired');
      return false;
    }

    // Verify the signature
    const secret = env.CSRF_SECRET || 'default-secret-change-in-production';
    const data = `${tokenPart}:${timestamp}`;
    const expectedHash = createHmac('sha256', secret).update(data).digest('hex');

    return hash === expectedHash;
  } catch (error) {
    logger.error('CSRF token verification error', error);
    return false;
  }
}

/**
 * Validate CSRF token from request header or body
 */
export function validateCsrfHeader(csrfToken: string | null): boolean {
  if (!csrfToken) {
    logger.warn('CSRF token missing from request');
    return false;
  }

  if (!verifyCsrfToken(csrfToken)) {
    logger.warn('CSRF token validation failed');
    return false;
  }

  return true;
}
