import { z } from 'zod';

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),

  // Email Service
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  CONTACT_EMAIL: z.string().email().default('contact@clarity-ai.app'),

  // Authentication
  AUTH_SECRET: z.string().min(32, 'AUTH_SECRET must be at least 32 characters'),
  AUTH_GITHUB_ID: z.string().optional(),
  AUTH_GITHUB_SECRET: z.string().optional(),
  AUTH_GOOGLE_ID: z.string().optional(),
  AUTH_GOOGLE_SECRET: z.string().optional(),
  AUTH_URL: z.string().url().default('http://localhost:3000'),

  // Better Auth
  BETTER_AUTH_SECRET: z.string().min(32).optional(),
  BETTER_AUTH_URL: z.string().url().optional(),

  // App Configuration
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),

  // Sentry (Optional but recommended)
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),

  // Redis for Rate Limiting
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

  // CSRF Secret
  CSRF_SECRET: z.string().min(32).optional(),
});

type Environment = z.infer<typeof envSchema>;

let env: Environment;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    const missingVars = error.errors
      .map((err) => `${err.path.join('.')}: ${err.message}`)
      .join('\n  ');

    console.error(
      `❌ Invalid environment configuration:\n  ${missingVars}`
    );

    // In production, fail hard
    if (process.env.NODE_ENV === 'production') {
      throw error;
    }
  }

  throw error;
}

// Validate production requirements
if (env.NODE_ENV === 'production') {
  const requiredForProduction = ['RESEND_API_KEY', 'DATABASE_URL', 'AUTH_SECRET'];
  const missing = requiredForProduction.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables in production: ${missing.join(', ')}`
    );
  }

  // Warn if Sentry is not configured
  if (!env.NEXT_PUBLIC_SENTRY_DSN) {
    console.warn('⚠️  Warning: Sentry DSN not configured. Error tracking disabled.');
  }

  // Warn if rate limiting is not configured
  if (!env.UPSTASH_REDIS_REST_URL) {
    console.warn('⚠️  Warning: Upstash Redis not configured. Rate limiting disabled.');
  }
}

export { env };
