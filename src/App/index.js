import React from 'react';
import Provider from './Provider';
import RootNavigator from '../navigation/RootNavigator';

const App = () => (
  <Provider>
    <RootNavigator />
  </Provider>
);

export default App;
