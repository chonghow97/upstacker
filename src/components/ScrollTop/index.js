import React from 'react';
import { TouchableOpacity } from 'react-native';
import ArrowUp from 'asset/svg/arrow-up.svg';

const ScrollTop = ({ className, show, trigger, onPress, ...restProps }) => {
  const onPressTop = () => {
    trigger?.current?.scrollToOffset({ animated: true, y: 0 });
    onPress?.();
  };

  const combinedClassName = `bg-gray-400 dark:bg-blue-200 z-10 w-12 h-12 flex items-center justify-center rounded-full absolute bottom-12 right-3 ${className || ''}`.trim();

  return (
    show && (
      <TouchableOpacity className={combinedClassName} onPress={onPressTop} {...restProps}>
        <ArrowUp fill="#fff" />
      </TouchableOpacity>
    )
  );
};

export default ScrollTop;
