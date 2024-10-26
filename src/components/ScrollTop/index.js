import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';
import ArrowUp from 'asset/svg/arrow-up.svg';

const ScrollTop = ({className, show, trigger, onPress, ...restProps}) => {
  const tw = useTailwind();

  const onPressTop = () => {
    trigger?.current?.scrollToOffset({animated: true, y: 0});
    onPress?.();
  };

  const myStyle = tw(
    classNames(
      'bg-gray-400 dark:bg-blue-200 z-10 w-12 h-12 flex items-center justify-center rounded-full absolute bottom-12 right-3',
      className,
    ),
  );

  return (
    show && (
      <TouchableOpacity style={myStyle} onPress={onPressTop} {...restProps}>
        <ArrowUp fill="#fff" />
      </TouchableOpacity>
    )
  );
};

export default ScrollTop;
