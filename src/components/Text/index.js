import {Text as RNText} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

const Text = ({children, className, text, style, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('text-black dark:text-white', className));

  return (
    <RNText style={[myStyle, style]} {...restProps}>
      {text || children}
    </RNText>
  );
};

export default Text;
