export default {
  roots: ['<rootDir>/src'],
  colletCoverageFrom: ['<rootDir>/src/***/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnviroment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
