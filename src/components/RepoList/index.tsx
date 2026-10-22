import { TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import React from 'react';
import Text from 'components/Text';

export interface Props extends TouchableOpacityProps {
  title?: string;
  description?: string | null;
}

// A repo row: name + description. (Previously this file was an accidental copy of components/Input.)
const RepoList = ({ title, description, className, ...restProps }: Props) => {
  const combinedClassName = `border border-gray-300 dark:border-gray-600 px-1.5 py-3 mb-5 rounded ${className || ''}`.trim();

  return (
    <TouchableOpacity className={combinedClassName} {...restProps}>
      <Text className="font-bold" text={title} />
      {description ? <Text className="mt-1" text={description} /> : null}
    </TouchableOpacity>
  );
};

export default RepoList;
