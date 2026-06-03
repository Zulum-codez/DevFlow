/**
 * Logger utility for consistent application logging
 * @module src/utils/logger
 */

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, '../../logs');
const LOG_FILE = path.join(LOG_DIR, 'app.log');

// Create logs directory if it doesn't exist
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG'
};

const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

/**
 * Format log message with timestamp
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @param {*} data - Additional data
 * @returns {string} Formatted log message
 */
function formatLog(level, message, data = '') {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message} ${data ? JSON.stringify(data) : ''}`;
}

/**
 * Write log to file
 * @param {string} message - Log message
 */
function writeToFile(message) {
  try {
    fs.appendFileSync(LOG_FILE, message + '\n');
  } catch (err) {
    console.error('Failed to write to log file:', err);
  }
}

const logger = {
  error: (message, error = '') => {
    const formatted = formatLog('ERROR', message, error);
    console.error(formatted);
    writeToFile(formatted);
  },

  warn: (message, data = '') => {
    const formatted = formatLog('WARN', message, data);
    console.warn(formatted);
    writeToFile(formatted);
  },

  info: (message, data = '') => {
    const formatted = formatLog('INFO', message, data);
    console.log(formatted);
    writeToFile(formatted);
  },

  debug: (message, data = '') => {
    if (LOG_LEVEL === 'debug') {
      const formatted = formatLog('DEBUG', message, data);
      console.log(formatted);
      writeToFile(formatted);
    }
  }
};

module.exports = logger;
