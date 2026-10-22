import { Text as RNText } from 'react-native';
import type { TextProps } from 'react-native';
import React from 'react';

export interface Props extends TextProps {
  text?: React.ReactNode;
}

const Text = ({ children, className, text, style, ...restProps }: Props) => {
  // 合并默认样式与传入样式，默认自带 'text-black dark:text-white'
  const combinedClassName = `text-black dark:text-white ${className || ''}`.trim();

  return (
    <RNText className={combinedClassName} style={style} {...restProps}>
      {text || children}
    </RNText>
  );
};

export default Text;
