import { env } from './env';

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

interface LogMetadata {
  [key: string]: any;
}

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  metadata?: LogMetadata;
  error?: {
    message: string;
    stack?: string;
    name?: string;
  };
}

function formatLogEntry(entry: LogEntry): string {
  return JSON.stringify(entry);
}

export const logger = {
  debug: (message: string, metadata?: LogMetadata) => {
    if (env.NODE_ENV !== 'production') {
      const entry: LogEntry = {
        timestamp: new Date().toISOString(),
        level: LogLevel.DEBUG,
        message,
        ...(metadata && { metadata }),
      };
      console.log(formatLogEntry(entry));
    }
  },

  info: (message: string, metadata?: LogMetadata) => {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: LogLevel.INFO,
      message,
      ...(metadata && { metadata }),
    };
    console.log(formatLogEntry(entry));
  },

  warn: (message: string, metadata?: LogMetadata) => {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: LogLevel.WARN,
      message,
      ...(metadata && { metadata }),
    };
    console.warn(formatLogEntry(entry));
  },

  error: (message: string, error?: Error | unknown, metadata?: LogMetadata) => {
    let errorData: { message: string; stack?: string; name?: string } | undefined;

    if (error instanceof Error) {
      errorData = {
        message: error.message,
        stack: error.stack,
        name: error.name,
      };
    } else if (typeof error === 'string') {
      errorData = { message: error };
    }

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: LogLevel.ERROR,
      message,
      ...(metadata && { metadata }),
      ...(errorData && { error: errorData }),
    };

    console.error(formatLogEntry(entry));
  },
};
