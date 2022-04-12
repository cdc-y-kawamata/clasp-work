module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    SpreadsheetApp: {},
    PropertiesService: {},
    UrlFetchApp: {},
  },
};
