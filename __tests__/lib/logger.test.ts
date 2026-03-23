import { logger } from '@/lib/logger'

describe('Logger', () => {
  let spyLog: jest.SpyInstance
  let spyWarn: jest.SpyInstance
  let spyError: jest.SpyInstance

  beforeEach(() => {
    spyLog = jest.spyOn(console, 'log').mockImplementation()
    spyWarn = jest.spyOn(console, 'warn').mockImplementation()
    spyError = jest.spyOn(console, 'error').mockImplementation()
  })

  afterEach(() => {
    spyLog.mockRestore()
    spyWarn.mockRestore()
    spyError.mockRestore()
  })

  describe('logger.info', () => {
    it('should log info message', () => {
      logger.info('Test message')

      expect(spyLog).toHaveBeenCalled()
      const output = spyLog.mock.calls[0][0]
      const parsed = JSON.parse(output)

      expect(parsed.level).toBe('INFO')
      expect(parsed.message).toBe('Test message')
      expect(parsed.timestamp).toBeDefined()
    })

    it('should include metadata', () => {
      logger.info('Test message', { userId: 123, email: 'test@example.com' })

      expect(spyLog).toHaveBeenCalled()
      const output = spyLog.mock.calls[0][0]
      const parsed = JSON.parse(output)

      expect(parsed.metadata).toEqual({ userId: 123, email: 'test@example.com' })
    })
  })

  describe('logger.warn', () => {
    it('should log warning message', () => {
      logger.warn('Warning message')

      expect(spyWarn).toHaveBeenCalled()
      const output = spyWarn.mock.calls[0][0]
      const parsed = JSON.parse(output)

      expect(parsed.level).toBe('WARN')
      expect(parsed.message).toBe('Warning message')
    })
  })

  describe('logger.error', () => {
    it('should log error with Error object', () => {
      const error = new Error('Test error')
      logger.error('Error occurred', error)

      expect(spyError).toHaveBeenCalled()
      const output = spyError.mock.calls[0][0]
      const parsed = JSON.parse(output)

      expect(parsed.level).toBe('ERROR')
      expect(parsed.error.message).toBe('Test error')
      expect(parsed.error.stack).toBeDefined()
    })

    it('should log error with string', () => {
      logger.error('Error occurred', 'String error message')

      expect(spyError).toHaveBeenCalled()
      const output = spyError.mock.calls[0][0]
      const parsed = JSON.parse(output)

      expect(parsed.error.message).toBe('String error message')
    })

    it('should log error with metadata', () => {
      const error = new Error('Test error')
      logger.error('Error occurred', error, { retries: 3 })

      expect(spyError).toHaveBeenCalled()
      const output = spyError.mock.calls[0][0]
      const parsed = JSON.parse(output)

      expect(parsed.metadata).toEqual({ retries: 3 })
      expect(parsed.error.message).toBe('Test error')
    })
  })
})
