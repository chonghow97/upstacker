import React from 'react';
import HomeScreen from 'screens/App/HomeScreen';
import TestScreen from 'screens/App/Test';
import RepoDetailScreen from 'screens/App/RepoDetailScreen';
import Header from 'components/Header';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useTailwind} from 'tailwind-rn';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const RootNavigator = () => {
  const tw = useTailwind();
  const {color} = tw('text-black dark:text-white');

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="app">
        <Stack.Screen
          name="test"
          options={{title: 'Test', headerShown: false}}
          component={TestScreen}
          x
        />
        <Stack.Screen
          name="app"
          options={{
            title: 'React Community',
            headerShown: true,
            headerTitle: Header,
            headerStyle: tw('dark:bg-gray-800'),
            headerTintColor: color,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="repoDetail"
          component={RepoDetailScreen}
          options={{
            title: 'React Community',
            fullScreenGestureEnabled: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
