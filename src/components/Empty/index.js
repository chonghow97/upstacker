import {View, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';
import EmptyIcon from 'asset/svg/empty.svg';

const Empty = ({icon, content, title, className, onPress, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('flex justify-center items-center', className));
  return (
    <View style={myStyle} {...restProps}>
      <View style={tw('dark:bg-gray-200 dark:p-10 dark:rounded-lg')}>
        {icon || <EmptyIcon width={300} height={350} />}
      </View>
      {title && (
        <View style={tw('mt-12')}>
          <Text style={tw('text-lg font-bold text-center dark:text-white')}>
            {title}
          </Text>
          {content || ''}
        </View>
      )}
    </View>
  );
};

export default Empty;
