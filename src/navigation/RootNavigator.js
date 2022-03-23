import React from 'react';
import HomeScreen from 'screens/App/HomeScreen';
import TestScreen from 'screens/App/Test';
import RepoDetailScreen from 'screens/App/RepoDetailScreen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const RootNavigator = () => {
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
          options={{title: 'React Community', headerShown: false}}
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
