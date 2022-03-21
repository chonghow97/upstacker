import React from 'react';
import {useColorScheme} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../../tailwind.json';

import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

const Provider = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TailwindProvider utilities={utilities} colorScheme={useColorScheme()}>
        {children}
      </TailwindProvider>
    </QueryClientProvider>
  );
};

export default Provider;
