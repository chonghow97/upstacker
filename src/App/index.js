import React from 'react';
import Provider from './Provider';
import HomeScreen from '../screens/App/HomeScreen';
import Screen from '@component/Screen';

const App = () => {
  return (
    <Provider>
      <Screen>
        <HomeScreen />
      </Screen>
    </Provider>
  );
};

export default App;
