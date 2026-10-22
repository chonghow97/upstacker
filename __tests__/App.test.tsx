/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import axios from 'axios';
import App from '../src/App';

// Fake timers stop TanStack Query's 5-minute cache GC timer from keeping Jest alive after the test
jest.useFakeTimers();

// Keep the smoke test off the network: GitHub requests stay pending
jest.spyOn(axios, 'get').mockImplementation(() => new Promise(() => {}));

test('renders correctly', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });
  await ReactTestRenderer.act(() => {
    renderer?.unmount();
  });
});
