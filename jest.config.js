module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['./jest.setup.js'],
  // These packages ship untranspiled ESM and must go through Babel
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-redux|@tanstack|nativewind|react-native-css-interop|react-native-reanimated|react-native-worklets|react-native-svg)/)',
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
};
