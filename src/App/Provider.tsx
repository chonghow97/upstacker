import React from 'react';
import type {PropsWithChildren} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from '@redux/configureStore';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Provider = ({children}: PropsWithChildren) => (
  <SafeAreaProvider>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  </SafeAreaProvider>
);

export default Provider;
