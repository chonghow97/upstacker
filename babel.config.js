module.exports = {
  presets: [
    'module:@react-native/babel-preset', 
    'nativewind/babel' // 🚀 NativeWind 预设
  ],
  plugins: [
    [
      'module-resolver', // 🚀 1. 路径别名解析
      {
        root: ['./src'],
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
      'module:react-native-dotenv', // 🚀 2. 核心修复：注入环境变量插件支持 '@env' 导入
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin', // 🚀 3. Reanimated 插件（必须放在最后）
  ],
};
