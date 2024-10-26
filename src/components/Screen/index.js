import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

// const isIos = Platform.OS === 'ios';

export const Screen = props => {
  const {children, className, onScroll, ...restProps} = props;
  const tw = useTailwind();

  const myStyle = tw(
    classNames('flex flex-1 bg-white dark:bg-black', className),
  );

  return (
    <SafeAreaView style={myStyle} {...restProps}>
      {onScroll ? (
        <FlatList
          ListHeaderComponent={
            <View style={tw('pt-3 px-1.5')}>{children}</View>
          }
        />
      ) : (
        <View style={tw('pt-3 px-1.5')}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Screen;
