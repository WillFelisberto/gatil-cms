import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  testMatch: ["<rootDir>/app/[(]my-app[)]/**/*.test.[jt]s?(x)"], // Padrão mais abrangente

  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/app/[(]my-app[)]/hooks/",
    "<rootDir>/app/[(]my-app[)]/context/",
    "<rootDir>/app/[(]my-app[)]/lib/*",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/app/[(]my-app[)]/hooks/*",
    "<rootDir>/app/[(]my-app[)]/context/*",
    "<rootDir>/__mocks__/*",
  ],
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/tests/(.*)$": "<rootDir>/.jest/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>"], // Adicione isto
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
};

export default config;
