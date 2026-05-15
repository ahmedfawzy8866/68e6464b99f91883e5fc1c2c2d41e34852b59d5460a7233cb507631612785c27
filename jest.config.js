/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: { jsx: 'react' } }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/config/',
    '<rootDir>/backend-integration/config/',
    '<rootDir>/apps/whatsapp-scraper-bot/',
    '<rootDir>/bots/whatsapp-scraper/',
  ],
  collectCoverageFrom: [
    'functions/**/*.js',
    'app/api/**/*.ts',
    '!**/*.d.ts',
  ],
};

module.exports = config;
