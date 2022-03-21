import React from 'react';
import Provider from './Provider';
import HomeScreen from '../screens/App/HomeScreen';

const App = () => {
  return (
    <Provider>
      <HomeScreen />
    </Provider>
  );
};

export default App;
