import Text from 'components/Text';
import {View, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Repo from 'asset/svg/repo-icon.svg';

import React from 'react';

const RepoList = ({title, description, ...restProps}) => {
  const tw = useTailwind();

  const {color} = tw('text-gray-800 dark:text-gray-200');

  return (
    <TouchableOpacity
      style={tw(
        'border dark:border-0 dark:bg-gray-800 px-3 pt-1.5 pb-3 mb-5 rounded',
      )}
      {...restProps}>
      <Text
        numberOfLines={1}
        className="text-xs border-2 px-3 text-right absolute top-2 right-2 bg-gray-400 dark:bg-blue-200  rounded-full text-white dark:text-gray-600"
        text="Public"
      />

      <View style={tw('flex-row items-center ')}>
        <Repo fill={color} style={tw('mr-2')} />
        <Text
          numberOfLines={1}
          className="text-lg font-bold dark:text-blue-500 mb-1"
          text={title}
        />
      </View>
      <Text
        className="text-sm text-gray-600 dark:text-gray-200"
        text={description || 'No Description'}
      />
    </TouchableOpacity>
  );
};

export default RepoList;
