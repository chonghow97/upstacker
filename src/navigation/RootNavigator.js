import React from 'react';
import HomeScreen from 'screens/App/HomeScreen';
import TestScreen from 'screens/App/Test';
import RepoDetailScreen from 'screens/App/RepoDetailScreen';
import Header from 'components/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useTailwind} from 'tailwind-rn';

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
        />
        <Stack.Screen
          name="app"
          options={{
            title: 'React Community',
            headerShown: true,
            headerTitle: Header,
            headerStyle: [tw('dark:bg-gray-800')],
            headerTintColor: color,
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
            headerStyle: tw('dark:bg-gray-800'),
            headerTintColor: color,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
