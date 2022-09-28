/** @type {import('jest').Config} */
const config = {
    verbose: true,
    rootDir: 'src',
    coverageDirectory: '../coverage',
    testPathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
    coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js']
  };
  
  module.exports = config;