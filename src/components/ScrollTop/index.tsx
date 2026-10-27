import React from 'react';
import {TouchableOpacity} from 'react-native';
import type {FlatList, TouchableOpacityProps} from 'react-native';
import ArrowUp from 'asset/svg/arrow-up.svg';

export interface Props extends TouchableOpacityProps {
  show?: boolean;
  trigger?: React.RefObject<FlatList<unknown> | null>;
  onPress?: () => void;
}

const ScrollTop = ({
  className,
  show,
  trigger,
  onPress,
  ...restProps
}: Props) => {
  const onPressTop = () => {
    trigger?.current?.scrollToOffset({animated: true, offset: 0});
    onPress?.();
  };

  const combinedClassName =
    `bg-gray-400 dark:bg-blue-200 z-10 w-12 h-12 flex items-center justify-center rounded-full absolute bottom-12 right-3 ${className || ''}`.trim();

  if (!show) {
    return null;
  }

  return (
    <TouchableOpacity
      className={combinedClassName}
      onPress={onPressTop}
      {...restProps}>
      <ArrowUp fill="#fff" />
    </TouchableOpacity>
  );
};

export default ScrollTop;
