export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "/^(.*)$/": "<rootDir>/src/$1",
    "@/assets/(.*)": "<rootDir>/src/assets/$1",
    "@/components/(.*)": "<rootDir>/src/components/$1",
  },
  modulePaths: ["<rootDir>"],
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "**/src/**/*.{js,ts,tsx}",
    "!**/*.test.{js,ts,tsx}",
    "!**/*.stories.{js,ts,tsx}",
    "!src/themes/**/*.{js,ts,tsx}",
    "!src/component/**/__test__/__snapshots__/*.test.{js,ts,tsx}.snap",
  ],
};
