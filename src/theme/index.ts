import {useColorScheme} from 'react-native';

// SVG icons aren't styled by className, so their color follows the color scheme here
export const useIconColor = () =>
  useColorScheme() === 'dark' ? '#ffffff' : '#000000';
