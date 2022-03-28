import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';

import {setQuery} from 'redux/ducks/common';
import ArrowLeft from 'asset/svg/arrowLeft.svg';

import {debounce} from 'util';
import Input from '../Input';

const Search = ({onPress, color}) => {
  const dispatch = useDispatch();

  const onChangeText = debounce(e => dispatch(setQuery(e)), 1000);

  useEffect(
    () => () => {
      dispatch(setQuery(''));
    },
    [],
  );

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <ArrowLeft fill={color} />
      </TouchableOpacity>
      <Input onChangeText={onChangeText} className="flex-1 ml-3" />
    </>
  );
};

export default Search;
