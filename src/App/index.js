import React from 'react';
import Provider from './Provider';
import HomeScreen from '../screens/HomeScreen';

const App = () => {
  return (
    <Provider>
      <HomeScreen />
    </Provider>
  );
};

export default App;
