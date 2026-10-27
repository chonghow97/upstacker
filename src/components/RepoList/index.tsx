import {StyleSheet, View, TouchableOpacity} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import React from 'react';
import Text from 'components/Text';
import Repo from 'asset/svg/repo-icon.svg';
import {useIconColor} from 'theme';

export interface Props extends TouchableOpacityProps {
  title?: string;
  description?: string | null;
}

const styles = StyleSheet.create({
  icon: {marginRight: 8},
});

const RepoList = ({title, description, className, ...restProps}: Props) => {
  const iconColor = useIconColor();
  const combinedClassName =
    `h-20 border dark:border-0 dark:bg-gray-800 px-3 pt-1.5 pb-3 mb-5 rounded ${className || ''}`.trim();

  return (
    <TouchableOpacity className={combinedClassName} {...restProps}>
      <Text
        numberOfLines={1}
        className="text-xs border-2 px-3 text-right absolute top-2 right-2 bg-gray-400 dark:bg-blue-200 rounded-full text-white dark:text-gray-600"
        text="Public"
      />

      <View className="flex-row items-center">
        <Repo color={iconColor} style={styles.icon} />
        <Text
          numberOfLines={1}
          className="text-lg font-bold dark:text-blue-500 mb-1"
          text={title}
        />
      </View>
      <Text
        numberOfLines={2}
        className="text-sm text-gray-600 dark:text-gray-200"
        text={description || 'No Description'}
      />
    </TouchableOpacity>
  );
};

export default RepoList;
