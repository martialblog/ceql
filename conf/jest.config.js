const path = require('path');

module.exports = {
  rootDir: path.dirname(__dirname),
  modulePaths: [
    '<rootDir>/src',
    '<rootDir>/node_modules'
  ],
  testMatch: ['**/*.spec.(ts|js)?(x)'],
  testEnvironment: "node",
  collectCoverage: true,
  verbose: true
};
