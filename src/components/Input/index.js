import {TextInput} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

const Input = ({className, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(
    classNames('dark:text-white px-1.5 py-3 bg-gray-300 rounded', className),
  );

  return <TextInput style={myStyle} {...restProps} />;
};

export default Input;
