import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from 'redux/configureStore';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const Provider = ({children}) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </ReduxProvider>
);

export default Provider;
