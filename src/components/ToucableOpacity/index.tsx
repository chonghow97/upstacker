import React from 'react';
import {TouchableOpacity as O} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import classNames from 'classnames';
import Text from 'components/Text';

export interface Props extends TouchableOpacityProps {
  item?: {name?: string; description?: string | null};
}

// NativeWind v4 removed useTailwind(); className is passed straight through instead
export const ToucableOpacity = ({
  item,
  className,
  style,
  ...restProps
}: Props) => (
  <O
    {...restProps}
    className={classNames('border px-1.5 py-3 mb-5 rounded', className)}
    style={style}>
    <Text text={item?.name} />
    <Text text={item?.description} />
  </O>
);

export default ToucableOpacity;
