// The default React Native welcome screen. react-native/Libraries/NewAppScreen was removed;
// this follows the RN 0.88 template, which uses @react-native/new-app-screen instead.
import React from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="src/screens/RNMain/index.tsx" safeAreaInsets={safeAreaInsets} />
    </View>
  );
};

export default App;
