import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { sql } from '@/lib/db';
import { logger } from '@/lib/logger';

/**
 * Verify email subscription
 * GET /api/newsletter/verify?token=<verification_token>
 */
export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token');

    if (!token) {
      logger.warn('Verification attempted without token');
      return NextResponse.redirect(
        new URL('/?error=invalid_token', request.url)
      );
    }

    logger.info('Email verification started', { tokenPrefix: token.substring(0, 8) });

    // Find and update subscriber
    const subscriber = await sql`
      UPDATE newsletter_subscribers
      SET
        verified_at = CURRENT_TIMESTAMP,
        active = true,
        updated_at = CURRENT_TIMESTAMP
      WHERE
        verification_token = ${token}
        AND verified_at IS NULL
      RETURNING email
    `;

    if (!subscriber || subscriber.length === 0) {
      logger.warn('Verification token not found or already used', { tokenPrefix: token.substring(0, 8) });
      return NextResponse.redirect(
        new URL('/?error=invalid_or_expired_token', request.url)
      );
    }

    const email = subscriber[0].email;
    logger.info('Email verified successfully', { email });

    return NextResponse.redirect(
      new URL('/?success=email_verified', request.url)
    );
  } catch (error) {
    logger.error('Newsletter verification error', error);
    Sentry.captureException(error, {
      tags: { endpoint: 'newsletter/verify', action: 'handler' },
    });
    return NextResponse.redirect(
      new URL('/?error=verification_failed', request.url)
    );
  }
}
