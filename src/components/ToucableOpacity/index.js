import React from 'react';
import {TouchableOpacity as O, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import classNames from 'classnames';

export const ToucableOpacity = ({item, className, style, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('border px-1.5 py-3 mb-5 rounded', className));

  return (
    <O {...restProps} style={[myStyle, style]}>
      <Text text={item?.name} />
      <Text text={item?.description} />
    </O>
  );
};

export default ToucableOpacity;
