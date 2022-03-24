import React from 'react';
import {useColorScheme} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../../tailwind.json';
import {Provider as ReduxProvider} from 'react-redux';
import store from 'redux/configureStore';

import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

const Provider = ({children}) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <TailwindProvider utilities={utilities} colorScheme={useColorScheme()}>
          {children}
        </TailwindProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default Provider;
