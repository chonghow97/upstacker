import React from 'react';
import {View as RNView} from 'react-native';
import type {ViewProps} from 'react-native';
import classNames from 'classnames';

// NativeWind v4 removed useTailwind(); className is passed straight through instead
const View = ({className, ...restProps}: ViewProps) => (
  <RNView className={classNames('', className)} {...restProps} />
);

export default View;
