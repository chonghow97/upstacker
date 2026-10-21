import React from 'react';
import { View as RNView } from 'react-native';

const View = ({ className, style, ...restProps }) => {
  // 直接通过 className 透传，NativeWind 会在底层处理 RNView 的 className
  return <RNView className={className} style={style} {...restProps} />;
};

export default View;
