import React from 'react';
import { View } from 'react-native'; // 🚀 引入原生 View
import Provider from './Provider';
import RootNavigator from '../navigation/RootNavigator';
import '../../global.css';

const App = () => (
  <Provider>
    {/* 🚀 注入 flex-1 样式确保子组件高度 100% 撑开 */}
    <View className="flex-1 bg-white dark:bg-black">
      <RootNavigator />
    </View>
  </Provider>
);

export default App;
