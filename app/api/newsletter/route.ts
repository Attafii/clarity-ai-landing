import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sql } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await sql`
      SELECT email FROM newsletter_subscribers WHERE email = ${email}
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      );
    }

    // Save to database
    await sql`
      INSERT INTO newsletter_subscribers (email, subscribed_at)
      VALUES (${email}, NOW())
    `;

    // Send welcome email via Resend
    await resend.emails.send({
      from: 'ClarityAI <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to ClarityAI Newsletter! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #A459E1 0%, #F0CDFF 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 32px;">✨ Welcome to ClarityAI!</h1>
            </div>
            
            <div style="background: #f9f9f9; padding: 40px 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #A459E1; margin-top: 0;">Thanks for subscribing! 🎉</h2>
              
              <p style="font-size: 16px; color: #555;">
                You're now part of the ClarityAI community! You'll receive updates about:
              </p>
              
              <ul style="font-size: 16px; color: #555; line-height: 1.8;">
                <li>New features and improvements</li>
                <li>Prompt engineering tips and tricks</li>
                <li>AI development best practices</li>
                <li>Community highlights and contributions</li>
              </ul>
              
              <div style="background: white; border-left: 4px solid #A459E1; padding: 20px; margin: 30px 0; border-radius: 5px;">
                <h3 style="margin-top: 0; color: #A459E1;">🚀 Get Started Now</h3>
                <p style="margin-bottom: 15px;">Install ClarityAI and start enhancing your prompts today:</p>
                <a href="https://github.com/Attafii/ClarityAI" style="display: inline-block; background: linear-gradient(135deg, #A459E1, #F0CDFF); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">View on GitHub</a>
              </div>
              
              <p style="font-size: 14px; color: #888; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                You're receiving this email because you subscribed to ClarityAI updates.
                <br>
                <a href="https://clarity-ai.app" style="color: #A459E1;">Visit Website</a>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed to newsletter!' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
