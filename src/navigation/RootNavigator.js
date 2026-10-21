import React from 'react';
import HomeScreen from 'screens/App/HomeScreen';
import TestScreen from 'screens/App/Test';
import RepoDetailScreen from 'screens/App/RepoDetailScreen';
import Header from 'components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native'; // 🚀 1. 引入原生的颜色模式 Hook

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme(); // 🚀 2. 获取当前的系统外观主题 ('light' 或 'dark')
  const isDark = colorScheme === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="app">
        <Stack.Screen
          name="test"
          options={{ title: 'Test', headerShown: false }}
          component={TestScreen}
        />
        <Stack.Screen
          name="app"
          options={{
            title: 'React Community',
            headerShown: true,
            headerTitle: () => <Header />, // 🚀 3. 改为函数式渲染，防止 Header 类匹配报错
            headerStyle: {
              // 🚀 4. 使用纯原生色值控制 header 背景，完美响应暗黑模式！
              backgroundColor: isDark ? '#1f2937' : '#ffffff', 
            },
            headerTintColor: isDark ? '#ffffff' : '#000000',
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="repoDetail"
          component={RepoDetailScreen}
          options={{
            title: '',
            fullScreenGestureEnabled: true,
            headerShown: true,
            headerStyle: {
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
            },
            headerTintColor: isDark ? '#ffffff' : '#000000',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
