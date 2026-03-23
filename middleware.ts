import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { logger } from './lib/logger';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=()'
  );

  // Cache headers for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Cache headers for images
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Cache API responses moderately
  if (request.nextUrl.pathname.startsWith('/api')) {
    // Don't cache POST/PUT/DELETE
    if (['GET', 'HEAD'].includes(request.method)) {
      response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    } else {
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    }

    // Log API calls in development
    if (process.env.NODE_ENV === 'development') {
      logger.debug('API request', {
        method: request.method,
        path: request.nextUrl.pathname,
      });
    }
  }

  return response;
}

// Configure which routes to apply middleware to
export const config = {
  matcher: [
    // Match all paths except static files and images
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
