/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/components/(.*)': ['<rootDir>/src/components/$1'],
    '@/domain/(.*)': ['<rootDir>/src/domain/$1'],
    '@/context/(.*)': ['<rootDir>/src/context/$1'],
    '@/hooks/(.*)': ['<rootDir>/src/hooks/$1'],
    '@/styles/(.*)': ['<rootDir>/src/styles/$1'],
    '@/data/(.*)': ['<rootDir>/src/data/$1'],
    '@/utils/(.*)': ['<rootDir>/src/utils/$1'],
    '@/types/(.*)': ['<rootDir>/src/types/$1'],
    '@/testUtils/(.*)': ['<rootDir>/src/__testUtils/$1'],
    '@/components': ['<rootDir>/src/components'],
    '@/domain': ['<rootDir>/src/domain'],
    '@/context': ['<rootDir>/src/context'],
    '@/hooks': ['<rootDir>/src/hooks'],
    '@/styles': ['<rootDir>/src/styles'],
    '@/data': ['<rootDir>/src/data'],
    '@/utils': ['<rootDir>/src/utils'],
    '@/types': ['<rootDir>/src/types'],
    '@/testUtils': ['<rootDir>/src/__testUtils'],
  },
};
