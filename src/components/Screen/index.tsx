import React from 'react';
import { View, FlatList } from 'react-native';
import { cssInterop } from 'nativewind';
// react-native's own SafeAreaView is deprecated (and iOS-only); Android draws edge-to-edge since RN 0.80
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';

// NativeWind only maps className -> style for core components; third-party views must be registered
cssInterop(SafeAreaView, { className: 'style' });

export interface Props extends NativeSafeAreaViewProps {
  className?: string;
  // Only used as a flag: when set, children render inside a FlatList header
  onScroll?: unknown;
}

export const Screen = (props: Props) => {
  const { children, className, onScroll, ...restProps } = props;

  // 🚀 确保底色是 bg-white，在暗黑模式下是 bg-black
  const combinedClassName = `flex-1 bg-white dark:bg-black ${className || ''}`.trim();

  return (
    <SafeAreaView className={combinedClassName} {...restProps}>
      {onScroll ? (
        <FlatList
          data={[]}
          renderItem={() => null}
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
