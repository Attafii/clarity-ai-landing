import { NextResponse, NextRequest } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { Resend } from 'resend';
import { sql } from '@/lib/db';
import { NewsletterSchema } from '@/lib/schemas';
import { checkRateLimit } from '@/lib/rateLimit';
import { logger } from '@/lib/logger';
import { env } from '@/lib/env';
import { randomUUID } from 'crypto';

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    logger.info('Newsletter subscription started');

    // Check rate limiting
    const rateLimit = await checkRateLimit(request, 'newsletter');
    if (!rateLimit.success) {
      logger.warn('Newsletter rate limit exceeded');
      return NextResponse.json(
        { error: 'Too many subscription attempts. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      logger.warn('Invalid JSON in newsletter request');
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate input with Zod
    const validation = NewsletterSchema.safeParse(body);
    if (!validation.success) {
      logger.warn('Newsletter validation failed', {
        errors: validation.error.issues,
      });
      return NextResponse.json(
        {
          error: 'Invalid email address',
          details: validation.error.issues.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { email } = validation.data;
    logger.info('Newsletter validation passed', { email });

    // Ensure table exists
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
          id SERIAL PRIMARY KEY,
          email TEXT UNIQUE NOT NULL,
          verified_at TIMESTAMP WITH TIME ZONE,
          subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          unsubscribed_at TIMESTAMP WITH TIME ZONE,
          active BOOLEAN DEFAULT true,
          verification_token TEXT UNIQUE,
          unsubscribe_token TEXT UNIQUE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `;
      logger.debug('Newsletter table ensured');
    } catch (error) {
      logger.error('Failed to ensure newsletter table', error);
      Sentry.captureException(error, { tags: { action: 'create_table' } });
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    // Check if email already exists and is active
    try {
      const existing = await sql`
        SELECT id, verified_at, active FROM newsletter_subscribers
        WHERE email = ${email} AND active = true
      `;

      if (existing.length > 0) {
        logger.info('Email already subscribed', { email });
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 400 }
        );
      }
    } catch (error) {
      logger.error('Failed to check existing subscription', error, { email });
      Sentry.captureException(error, { tags: { action: 'check_existing' } });
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    // Generate tokens
    const verificationToken = randomUUID();
    const unsubscribeToken = randomUUID();

    // Save to database
    try {
      await sql`
        INSERT INTO newsletter_subscribers (
          email,
          verification_token,
          unsubscribe_token,
          active
        )
        VALUES (${email}, ${verificationToken}, ${unsubscribeToken}, false)
        ON CONFLICT (email) DO UPDATE
        SET
          verification_token = ${verificationToken},
          unsubscribe_token = ${unsubscribeToken},
          active = false,
          updated_at = CURRENT_TIMESTAMP
      `;
      logger.info('Newsletter subscriber saved', { email });
    } catch (error) {
      logger.error('Failed to save newsletter subscriber', error, { email });
      Sentry.captureException(error, { tags: { action: 'save_subscriber' } });
      return NextResponse.json(
        { error: 'Failed to save subscription' },
        { status: 500 }
      );
    }

    // Send verification email
    try {
      const verificationUrl = `${env.NEXT_PUBLIC_APP_URL}/api/newsletter/verify?token=${verificationToken}`;

      await resend.emails.send({
        from: 'ClarityAI <onboarding@resend.dev>',
        to: email,
        subject: 'Verify your email for ClarityAI Newsletter',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #A459E1 0%, #F0CDFF 100%); padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 20px;">
                  <h1 style="color: white; margin: 0;">✨ Verify Your Email</h1>
                </div>

                <div style="background: #f9f9f9; padding: 30px; border-radius: 8px;">
                  <p style="margin-top: 0;">Thanks for subscribing to ClarityAI!</p>
                  <p style="color: #666;">Click the button below to verify your email address and complete your subscription.</p>

                  <div style="text-align: center; margin: 30px 0;">
                    <a href="${verificationUrl}" style="display: inline-block; background: linear-gradient(135deg, #A459E1, #F0CDFF); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                      Verify Email
                    </a>
                  </div>

                  <p style="font-size: 12px; color: #999; margin-bottom: 0;">
                    Or copy and paste this link:
                    <br>
                    <span style="word-break: break-all;">${verificationUrl}</span>
                  </p>
                </div>

                <p style="font-size: 12px; color: #999; text-align: center; margin-top: 20px;">
                  This link expires in 24 hours.
                </p>
              </div>
            </body>
          </html>
        `,
      });

      logger.info('Verification email sent', { email });
    } catch (error) {
      logger.error('Failed to send verification email', error, { email });
      Sentry.captureException(error, { tags: { action: 'send_verification' } });
      // Don't fail here - subscription is saved
    }

    // Send notification to admin
    try {
      const escapedEmail = escapeHtml(email);
      const escapedDate = escapeHtml(new Date().toLocaleString());

      await resend.emails.send({
        from: 'ClarityAI System <onboarding@resend.dev>',
        to: env.CONTACT_EMAIL,
        subject: 'New Newsletter Subscriber! 📧',
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #A459E1;">New Newsletter Subscriber</h2>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
              <p><strong>Email:</strong> ${escapedEmail}</p>
              <p><strong>Status:</strong> Pending verification</p>
              <p><strong>Date:</strong> ${escapedDate}</p>
            </div>
          </div>
        `,
      });

      logger.info('Admin notification sent', { email });
    } catch (error) {
      logger.error('Failed to send admin notification', error, { email });
      Sentry.captureException(error, { tags: { action: 'send_admin_notification' } });
      // Don't fail here
    }

    const duration = Date.now() - startTime;
    logger.info('Newsletter subscription successful', {
      email,
      duration: `${duration}ms`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Check your email to verify your subscription!',
      },
      { status: 200 }
    );
  } catch (error) {
    const duration = Date.now() - startTime;
    logger.error('Unexpected error in newsletter endpoint', error, {
      duration: `${duration}ms`,
    });
    Sentry.captureException(error, {
      tags: { endpoint: 'newsletter', action: 'handler' },
    });
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
