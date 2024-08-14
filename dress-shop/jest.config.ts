export {};
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "@components/(.*)$": "<rootDir>/src/components/$1",
    "@/assets/(.*)": "<rootDir>/src/assets/$1",
    "@/constants/(.*)": "<rootDir>/src/constants/$1",
    "@/mocks/(.*)": "<rootDir>/src/mocks/$1",
  },
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**/*.{js,ts,tsx}",
    "!src/*.{js,ts,tsx}",
    "!**/*.test.{js,ts,tsx}",
    "!**/*.stories.{js,ts,tsx}",
    "!src/themes/**/*.{js,ts,tsx}",
    "!src/components/**/__snapshots__/*.test.{js,ts,tsx}.snap",
    "!src/components/*.{js,ts,tsx}",
    "!src/routes/*.{js,ts,tsx}",
    "!src/stories/*.{js,ts,tsx,css}",
    "!src/pages/**/*.{js,ts,tsx}",
    "!src/layouts/**/*.{js,ts,tsx}",
    "!src/stores/**/*.{js,ts,tsx}",
    "!src/mocks/**/*.{js,ts,tsx}",
    "!src/services/**/*.{js,ts,tsx}",
    "!src/types/**/*.{js,ts,tsx}",
    "!src/utils/**/*.{js,ts,tsx}",
    "!src/constants/**/*.{js,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
