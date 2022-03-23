import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

const ScrollTop = ({className, show, trigger, onPress, ...restProps}) => {
  const tw = useTailwind();

  const onPressTop = () => {
    trigger?.current?.scrollToOffset({animated: true, y: 0});
    onPress?.();
  };

  const myStyle = tw(
    classNames(
      'bg-blue-200 z-10 p-7 rounded-full absolute bottom-12 right-3',
      {hidden: !show},
      className,
    ),
  );

  return (
    <TouchableOpacity style={myStyle} onPress={onPressTop} {...restProps} />
  );
};

export default ScrollTop;
