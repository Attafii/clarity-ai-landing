import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { Resend } from 'resend';
import { saveContact } from '@/lib/db';
import { ContactSchema } from '@/lib/schemas';
import { checkRateLimit } from '@/lib/rateLimit';
import { logger } from '@/lib/logger';
import { env } from '@/lib/env';

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
    logger.info('Contact form submission started');

    // Check rate limiting
    const rateLimit = await checkRateLimit(request, 'contact');
    if (!rateLimit.success) {
      logger.warn('Contact form rate limit exceeded');
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      logger.warn('Invalid JSON in contact request');
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate input with Zod
    const validation = ContactSchema.safeParse(body);
    if (!validation.success) {
      logger.warn('Contact form validation failed', {
        errors: validation.error.issues,
      });
      return NextResponse.json(
        {
          error: 'Invalid input',
          details: validation.error.issues.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    logger.info('Contact form validation passed', { email });

    // Escape user input to prevent XSS
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedSubject = subject ? escapeHtml(subject) : '';
    const escapedMessage = escapeHtml(message);

    // Save to database
    try {
      await saveContact({ name, email, subject, message });
      logger.info('Contact saved to database', { email });
    } catch (error) {
      logger.error('Failed to save contact to database', error, { email });
      Sentry.captureException(error, {
        tags: { endpoint: 'contact', action: 'save_to_db' },
      });
      return NextResponse.json(
        { error: 'Failed to save contact' },
        { status: 500 }
      );
    }

    // Send email via Resend
    try {
      const { error: emailError } = await resend.emails.send({
        from: 'ClarityAI Contact <onboarding@resend.dev>',
        to: [env.CONTACT_EMAIL],
        subject: escapedSubject || `New contact from ${escapedName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #A459E1;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${escapedName}</p>
              <p><strong>Email:</strong> ${escapedEmail}</p>
              ${escapedSubject ? `<p><strong>Subject:</strong> ${escapedSubject}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${escapedMessage}</p>
            </div>
            <p style="color: #666; font-size: 12px;">
              This message was sent from the ClarityAI contact form.
            </p>
          </div>
        `,
      });

      if (emailError) {
        logger.error('Resend error sending contact email', emailError, {
          email,
        });
        Sentry.captureException(emailError, {
          tags: { endpoint: 'contact', action: 'send_email' },
        });
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }

      logger.info('Contact email sent successfully', { email });
    } catch (error) {
      logger.error('Error sending contact email', error, { email });
      Sentry.captureException(error, {
        tags: { endpoint: 'contact', action: 'send_email' },
      });
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    const duration = Date.now() - startTime;
    logger.info('Contact form submission successful', {
      email,
      duration: `${duration}ms`,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    const duration = Date.now() - startTime;
    logger.error('Unexpected error in contact endpoint', error, {
      duration: `${duration}ms`,
    });
    Sentry.captureException(error, {
      tags: { endpoint: 'contact', action: 'handler' },
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
