module.exports = {
  name: 'es-example',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
    './es/*.js': {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
    './leetcode/*.js': {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  verbose: true,
};
