import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';

export const Screen = props => {
  const { children, className, onScroll, ...restProps } = props;

  // 🚀 确保底色是 bg-white，在暗黑模式下是 bg-black
  const combinedClassName = `flex-1 bg-white dark:bg-black ${className || ''}`.trim();

  return (
    <SafeAreaView className={combinedClassName} {...restProps}>
      {onScroll ? (
        <FlatList
          ListHeaderComponent={
            <View className="pt-3 px-1.5 flex-1">{children}</View>
          }
        />
      ) : (
        // 🚀 内部容器也必须 flex-1 撑满
        <View className="pt-3 px-1.5 flex-1">{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Screen;
