export {};
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "@components/(.*)$": "<rootDir>/src/components/$1",
  },
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/components/**/*.{js,ts,tsx}",
    "!**/*.test.{js,ts,tsx}",
    "!**/*.stories.{js,ts,tsx}",
    "!src/themes/**/*.{js,ts,tsx}",
    "!src/components/**/__snapshots__/*.test.{js,ts,tsx}.snap",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
  },
};
