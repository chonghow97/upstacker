import React from 'react';
import HomeScreen from 'screens/App/HomeScreen';
import TestScreen from 'screens/App/Test';
import RepoDetailScreen from 'screens/App/RepoDetailScreen';
import Text from 'components/Text';
import View from 'components/View';
import Github from 'asset/svg/github.svg';
import Search from 'asset/svg/search.svg';

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
            headerTitle: props => (
              <View className="flex-row flex-1 justify-between items-center pr-4">
                <Github
                  fill={color}
                  height={30}
                  width={80}
                  // style={tw('-mt-6')}
                />
                <Search fill={color} style={tw('-mt-1')} />
              </View>
            ),
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
