import { generateCsrfToken, verifyCsrfToken, validateCsrfHeader } from '@/lib/csrf'

// Mock logger
jest.mock('@/lib/logger', () => ({
  logger: {
    warn: jest.fn(),
    error: jest.fn(),
  },
}))

describe('CSRF Protection', () => {
  describe('generateCsrfToken', () => {
    it('should generate a valid token', () => {
      const token = generateCsrfToken()

      expect(token).toBeDefined()
      expect(typeof token).toBe('string')
      expect(token.length).toBeGreaterThan(0)
      // Should have format: token:timestamp:hash
      expect(token.split(':').length).toBe(3)
    })

    it('should generate different tokens each time', () => {
      const token1 = generateCsrfToken()
      const token2 = generateCsrfToken()

      expect(token1).not.toBe(token2)
    })
  })

  describe('verifyCsrfToken', () => {
    it('should verify a valid token', () => {
      const token = generateCsrfToken()
      const isValid = verifyCsrfToken(token)

      expect(isValid).toBe(true)
    })

    it('should reject invalid format', () => {
      const invalidToken = 'invalid:token'

      const isValid = verifyCsrfToken(invalidToken)
      expect(isValid).toBe(false)
    })

    it('should reject tampered token', () => {
      const token = generateCsrfToken()
      const [tokenPart, timestamp] = token.split(':')
      const tamperedToken = `${tokenPart}:${timestamp}:invalididhash`

      const isValid = verifyCsrfToken(tamperedToken)
      expect(isValid).toBe(false)
    })

    it('should reject expired token', () => {
      // Create a token with old timestamp (25+ hours old)
      const oldTimestamp = Date.now() - 86400000 * 2 // 2 days ago
      const { createHmac } = require('crypto')
      const secret = process.env.CSRF_SECRET || 'default-secret-change-in-production'
      const tokenValue = 'test-token'
      const data = `${tokenValue}:${oldTimestamp}`
      const hash = createHmac('sha256', secret).update(data).digest('hex')
      const oldToken = `${data}:${hash}`

      const isValid = verifyCsrfToken(oldToken)
      expect(isValid).toBe(false)
    })
  })

  describe('validateCsrfHeader', () => {
    it('should validate a valid token', () => {
      const token = generateCsrfToken()
      const isValid = validateCsrfHeader(token)

      expect(isValid).toBe(true)
    })

    it('should reject null token', () => {
      const isValid = validateCsrfHeader(null)

      expect(isValid).toBe(false)
    })

    it('should reject invalid token', () => {
      const isValid = validateCsrfHeader('invalid-token')

      expect(isValid).toBe(false)
    })
  })
})
