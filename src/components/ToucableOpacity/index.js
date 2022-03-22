import React from 'react';
import {TouchableOpacity as O, View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

export const ToucableOpacity = ({item, className, children, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('', className));

  return (
    <O className="border px-1.5 py-3 mb-5 rounded">
      <Text text={item?.name} />
      <Text text={item?.description} />
    </O>
  );
};

export default ToucableOpacity;
