import React from 'react';
import {useColorScheme} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../../tailwind.json';

const Provider = ({children}) => {
  const isDarkMode = useColorScheme();

  return (
    <>
      <TailwindProvider utilities={utilities} colorScheme={isDarkMode}>
        {children}
      </TailwindProvider>
    </>
  );
};

export default Provider;
