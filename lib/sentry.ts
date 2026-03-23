import * as Sentry from '@sentry/nextjs';
import { env } from './env';

// Initialize Sentry only if DSN is configured
if (env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: env.NEXT_PUBLIC_SENTRY_DSN,
    environment: env.NODE_ENV,
    enabled: env.NODE_ENV === 'production',

    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring
    // We recommend adjusting this value in production
    tracesSampleRate: env.NODE_ENV === 'production' ? 0.1 : 1.0,

    // Set sample rate for error events
    sampleRate: 1.0,

    // Attach stack traces to all messages
    attachStacktrace: true,

    // Configure which environments to send errors to Sentry
    beforeSend(event, hint) {
      // Filter out certain errors
      if (event.exception) {
        const error = hint.originalException;

        // Don't send client-side "Network request failed" errors from spam attempts
        if (
          error instanceof Error &&
          error.message.includes('Network request failed')
        ) {
          return null;
        }

        // Don't send specific error types
        if (error instanceof Error && error.message.includes('404')) {
          return null;
        }
      }

      return event;
    },

    // Ignore certain errors
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      // Google Tag Manager
      'gtag(',
      // Random plugins/extensions
      'mozilla/5.0',
    ],

    denyUrls: [
      // Browser extensions
      /extensions\//i,
      /^chrome:\/\//i,
    ],
  });
}

export { Sentry };
