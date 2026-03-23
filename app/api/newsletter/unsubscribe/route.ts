import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { sql } from '@/lib/db';
import { logger } from '@/lib/logger';

/**
 * Unsubscribe from newsletter
 * GET /api/newsletter/unsubscribe?token=<unsubscribe_token>
 */
export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token');

    if (!token) {
      logger.warn('Unsubscribe attempted without token');
      return NextResponse.redirect(
        new URL('/?error=invalid_token', request.url)
      );
    }

    logger.info('Unsubscribe started', { tokenPrefix: token.substring(0, 8) });

    // Find and update subscriber
    const subscriber = await sql`
      UPDATE newsletter_subscribers
      SET
        active = false,
        unsubscribed_at = CURRENT_TIMESTAMP,
        updated_at = CURRENT_TIMESTAMP
      WHERE unsubscribe_token = ${token}
      RETURNING email
    `;

    if (!subscriber || subscriber.length === 0) {
      logger.warn('Unsubscribe token not found', { tokenPrefix: token.substring(0, 8) });
      return NextResponse.redirect(
        new URL('/?error=invalid_token', request.url)
      );
    }

    const email = subscriber[0].email;
    logger.info('Email unsubscribed successfully', { email });

    return NextResponse.redirect(
      new URL('/?success=unsubscribed', request.url)
    );
  } catch (error) {
    logger.error('Newsletter unsubscribe error', error);
    Sentry.captureException(error, {
      tags: { endpoint: 'newsletter/unsubscribe', action: 'handler' },
    });
    return NextResponse.redirect(
      new URL('/?error=unsubscribe_failed', request.url)
    );
  }
}
