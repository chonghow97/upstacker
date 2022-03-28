import React from 'react';
import * as Sentry from '@sentry/react-native';
import {DSN as dsn} from '@env';
import Provider from './Provider';
import RootNavigator from '../navigation/RootNavigator';

Sentry.init({
  dsn,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const App = () => (
  <Provider>
    <RootNavigator />
  </Provider>
);

export default Sentry.wrap(App);
