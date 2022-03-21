import {View, Text as RNText} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

const Text = ({children, className, text, style, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(
    classNames('text-blue-300 dark:text-yellow-200', className),
  );

  return (
    <RNText style={[myStyle, style]} {...restProps}>
      {text || children}
    </RNText>
  );
};

export default Text;
