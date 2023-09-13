// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
// const getJestSetup = require('@papillonarts/setup/jest').getJestSetup

function getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold }) {
  return {
    testMatch: ['**/?(*.)test.js?(x)', '**/?(*.)test.ts?(x)'],
    testPathIgnorePatterns,
    roots: ['<rootDir>'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.(ts|tsx)$': 'babel-jest',
      '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    },
    coverageDirectory,
    collectCoverage,
    coverageReporters: ['lcov', 'text'],
    collectCoverageFrom,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$': '<rootDir>/.mock/file.js',
      '^.+\\.(css|less|scss|md)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    coverageThreshold,
  }
}

const testPathIgnorePatterns = []
const coverageDirectory = './.coverage/'
const collectCoverage = true
const collectCoverageFrom = [
  '!**/.docs/**',
  '!**/.mock/**',
  '!**/.storybook/**',
  '!**/.storybook-static-develop/**',
  '!**/.storybook-static-release/**',
  '!**/coverage/**',
  '!**/node_modules/**',
  'packages/**/*.{js,jsx}',
  '!packages/**/index.js',
  '!packages/**/*.part.js',
  '!packages/**/*.prop.js',
  '!packages/**/*.story.js',
  '!packages/**/*.test.js',
  '!packages/**/build/**',
  '!packages/**/node_modules/**',
  '!packages/**/webpack*',
  '!packages/css/**',
  '!packages/library/**',
  '!packages/setup/**',
]
const coverageThreshold = {
  global: {
    statements: 0,
    branches: 100,
    functions: 100,
    lines: 0,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })
