module.exports = {
  // Test environment
  testEnvironment: 'node',

  // Pattern for test files
  testMatch: ['**/tests/**/*.test.js', '**/__tests__/**/*.js'],

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.config.js',
    '!src/index.js'
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },

  // Module directories
  moduleDirectories: ['node_modules', 'src'],

  // Setup files
  setupFilesAfterEnv: [],

  // Transform files
  transform: {
    '^.+\\.js$': 'babel-jest'
  },

  // Watch plugins
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],

  // Ignore patterns
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Verbose output
  verbose: true,

  // Clear mocks between tests
  clearMocks: true,

  // Restore mocks between tests
  restoreMocks: true,

  // Test timeout
  testTimeout: 10000
};
