module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    // NativeWind's preset also adds the Reanimated 4 / Worklets plugin, so it must not be listed again below
    'nativewind/babel',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          apis: './src/apis',
          App: './src/App',
          components: './src/components',
          containers: './src/containers',
          navigation: './src/navigation',
          '@redux': './src/redux',
          screens: './src/screens',
          theme: './src/theme',
          util: './src/util',
          asset: './src/asset',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
