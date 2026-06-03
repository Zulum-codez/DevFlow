/**
 * Main entry point for the application
 * @module index
 */

require('dotenv').config();
const logger = require('./src/utils/logger');

/**
 * Initialize and start the application
 */
async function start() {
  try {
    logger.info('Starting application...');

    // Your app initialization logic here
    logger.info('Application started successfully');
  } catch (error) {
    logger.error('Failed to start application', error);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  logger.error('Unhandled Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', err => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

// Start the application
start();

module.exports = { start };
