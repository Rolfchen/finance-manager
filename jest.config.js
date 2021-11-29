/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '@/components/(.*)': ['./src/components/$1'],
    '@/domain/(.*)': ['./src/domain/$1'],
    '@/context/(.*)': ['./src/context/$1'],
    '@/hooks/(.*)': ['./src/hooks/$1'],
    '@/styles/(.*)': ['./src/styles/$1'],
    '@/data/(.*)': ['./src/data/$1'],
    '@/utils/(.*)': ['./src/utils/$1'],
    '@/types/(.*)': ['./src/types/$1'],
    '@/testUtils/(.*)': ['./src/__testUtils/$1'],
    '@/components': ['./src/components'],
    '@/domain': ['./src/domain'],
    '@/context': ['./src/context'],
    '@/hooks': ['./src/hooks'],
    '@/styles': ['./src/styles'],
    '@/data': ['./src/data'],
    '@/utils': ['./src/utils'],
    '@/types': ['./src/types'],
    '@/testUtils': ['./src/__testUtils'],
  },
};