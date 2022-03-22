import React from 'react';
import {View as RNView} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

const View = ({className, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('', className));

  return <RNView style={myStyle} {...restProps} />;
};

export default View;
