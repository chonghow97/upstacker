import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

const isIos = Platform.OS === 'ios';

export const Screen = props => {
  const {children, className, ...restProps} = props;
  const tw = useTailwind();

  const myStyle = tw(
    classNames('flex flex-1 bg-white dark:bg-black', className),
  );

  return (
    <SafeAreaView style={myStyle} {...restProps}>
      <View style={tw('py-3 px-1.5 mb-12')}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
