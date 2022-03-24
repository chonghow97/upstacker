import {TextInput, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';
import Repo from 'asset/svg/search.svg';

const Input = ({className, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(
    classNames(
      'flex-row items-center px-1.5 bg-gray-300 rounded dark:bg-transparent dark:border-white dark:border',
      className,
    ),
  );

  const {color} = tw('text-gray-800 dark:text-gray-200');

  return (
    <View style={myStyle}>
      <Repo fill={color} style={tw('p-2 mr-1')} />

      <TextInput
        style={tw('dark:text-white px-1.5 py-3 flex-1')}
        {...restProps}
        placeholderTextColor={color}
      />
    </View>
  );
};

export default Input;
