import { View, Text } from 'react-native';
import React from 'react';
import EmptyIcon from 'asset/svg/empty.svg';

const Empty = ({ icon, content, title, className, ...restProps }) => {
  const combinedClassName = `flex justify-center items-center ${className || ''}`.trim();

  return (
    <View className={combinedClassName} {...restProps}>
      <View className="dark:bg-gray-200 dark:p-10 dark:rounded-lg">
        {icon || <EmptyIcon width={300} height={350} />}
      </View>
      {title && (
        <View className="mt-12">
          <Text className="text-lg font-bold text-center dark:text-white">
            {title}
          </Text>
          {content || ''}
        </View>
      )}
    </View>
  );
};

export default Empty;
