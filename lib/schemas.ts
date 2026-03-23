import { z } from 'zod';

// Contact Form Validation
export const ContactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email is too long'),

  subject: z.string()
    .max(200, 'Subject must be less than 200 characters')
    .optional()
    .default(''),

  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
});

export type ContactInput = z.infer<typeof ContactSchema>;

// Newsletter Subscription Validation
export const NewsletterSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email is too long')
    .toLowerCase()
    .trim(),
});

export type NewsletterInput = z.infer<typeof NewsletterSchema>;

// Database subscriber validation
export const SubscriberSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  verified_at: z.date().nullable(),
  subscribed_at: z.date(),
  unsubscribed_at: z.date().nullable(),
  active: z.boolean(),
  verification_token: z.string().optional(),
  unsubscribe_token: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Subscriber = z.infer<typeof SubscriberSchema>;

// Safe error response
export const ErrorResponseSchema = z.object({
  error: z.string(),
  details: z.array(z.object({
    path: z.array(z.string()),
    message: z.string(),
  })).optional(),
});

// Success response
export const SuccessResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});
