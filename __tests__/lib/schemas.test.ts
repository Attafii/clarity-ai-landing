import { ContactSchema, NewsletterSchema } from '@/lib/schemas'

describe('Validation Schemas', () => {
  describe('ContactSchema', () => {
    it('should validate correct contact data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a test message that is long enough',
      }

      const result = ContactSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject missing required fields', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        // missing message
      }

      const result = ContactSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject invalid email format', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'not-an-email',
        message: 'Test message that is long enough',
      }

      const result = ContactSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject name with invalid characters', () => {
      const invalidData = {
        name: "John@123 <script>",
        email: 'john@example.com',
        message: 'Test message that is long enough',
      }

      const result = ContactSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject message shorter than 10 characters', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'short',
      }

      const result = ContactSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject message longer than 5000 characters', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'a'.repeat(5001),
      }

      const result = ContactSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should make subject optional', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message that is long enough',
      }

      const result = ContactSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
  })

  describe('NewsletterSchema', () => {
    it('should validate correct email', () => {
      const validData = {
        email: 'user@example.com',
      }

      const result = NewsletterSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid email format', () => {
      const invalidData = {
        email: 'not-an-email',
      }

      const result = NewsletterSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should lowercase email', () => {
      const data = {
        email: 'User@EXAMPLE.COM',
      }

      const result = NewsletterSchema.safeParse(data)
      if (result.success) {
        expect(result.data.email).toBe('user@example.com')
      }
    })

    it('should trim whitespace from email', () => {
      const data = {
        email: '  user@example.com  ',
      }

      const result = NewsletterSchema.safeParse(data)
      if (result.success) {
        expect(result.data.email).toBe('user@example.com')
      }
    })

    it('should reject email longer than 255 characters', () => {
      const invalidData = {
        email: `${'a'.repeat(256)}@example.com`,
      }

      const result = NewsletterSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})
