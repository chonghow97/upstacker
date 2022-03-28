import {View} from 'react-native';
import React from 'react';
import Github from 'asset/svg/github.svg';
import Search from 'asset/svg/search.svg';
import {useSelector, useDispatch} from 'react-redux';
import Input from '../Input';
import {setQuery} from 'redux/ducks/common';

import {debounce} from 'util';

import {useTailwind} from 'tailwind-rn';

const selectQuery = state => state.common.query;

const Header = props => {
  const tw = useTailwind();
  const dispatch = useDispatch();

  const {color} = tw('text-black dark:text-white');

  const onChangeText = debounce(e => dispatch(setQuery(e)), 1000);

  return (
    <View style={tw('flex-row w-[95%] justify-between items-center h-12')}>
      <Github fill={color} height={40} width={60} />
      {/* <Search fill={color} style={tw('-mt-1')} /> */}
      <Input onChangeText={onChangeText} className="flex-1" />
    </View>
  );
};

export default Header;
