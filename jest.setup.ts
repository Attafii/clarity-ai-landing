// jest.setup.ts
import '@testing-library/jest-dom'

// Suppress Sentry during tests
jest.mock('@sentry/nextjs', () => ({
  init: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
}))

// Mock environment variables (NODE_ENV is read-only, skip it)
process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000'
process.env.RESEND_API_KEY = 'test-key'
process.env.CONTACT_EMAIL = 'test@example.com'

