import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testMatch: ['<rootDir>/app/[(]my-app[)]/**/*.test.[jt]s?(x)'],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/app/[(]my-app[)]/hooks/',
    '<rootDir>/app/[(]my-app[)]/context/',
    '<rootDir>/app/[(]my-app[)]/lib/*',
    '<rootDir>/.jest/',
    '<rootDir>/docs/',
    '<rootDir>/utils/'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/utils/',
    '<rootDir>/docs/',
    '<rootDir>/.jest/',
    '<rootDir>/node_modules/',
    '<rootDir>/app/[(]my-app[)]/hooks/*',
    '<rootDir>/app/[(]my-app[)]/context/*',
    '<rootDir>/__mocks__/*'
  ],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]]
      }
    ]
  },
  transformIgnorePatterns: ['/node_modules/(?!(.*@payloadcms/richtext-lexical.*)/)'],
  moduleNameMapper: {
    '^@/tests/(.*)$': '<rootDir>/.jest/$1',
    '^@/(.*)$': '<rootDir>/$1'
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom'
};

export default config;
