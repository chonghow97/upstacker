import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const isIos = Platform.OS === 'ios';

export const Screen = props => {
  const {children, ...restProps} = props;

  // ==================== EVENTS

  // ==================== RENDER

  return <SafeAreaView {...restProps}>{children}</SafeAreaView>;
};

export default Screen;
