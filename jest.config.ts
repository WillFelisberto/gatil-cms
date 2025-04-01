import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testMatch: ['<rootDir>/app/[(]my-app[)]/**/*.test.[jt]s?(x)'],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/app/[(]my-app[)]/hooks/',
    '<rootDir>/app/[(]my-app[)]/context/',
    '<rootDir>/app/[(]my-app[)]/lib/*',
    '<rootDir>/.jest/' // ← Adicione aqui também
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
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
  moduleNameMapper: {
    '^@/tests/(.*)$': '<rootDir>/.jest/$1',
    '^@/(.*)$': '<rootDir>/app/(my-app)/$1' // Adicione seus aliases do Next.js
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom'
};

export default config;
