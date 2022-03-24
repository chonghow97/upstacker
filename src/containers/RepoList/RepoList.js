import Text from 'components/Text';
import {TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import React from 'react';

const RepoList = ({title, description, ...restProps}) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      style={tw(
        'border dark:border-0 dark:bg-gray-800 px-1.5 py-3 mb-5 rounded',
      )}
      {...restProps}>
      <Text className="text-lg font-bold dark:text-blue-500" text={title} />
      <Text
        className="text-sm text-gray-600 dark:text-gray-200"
        text={description || 'No Description'}
      />
    </TouchableOpacity>
  );
};

export default RepoList;
