import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';

import Input from '../Input';
import {setQuery} from 'redux/ducks/common';
import ArrowLeft from 'asset/svg/arrowLeft.svg';

import {debounce} from 'util';

const selectQuery = state => state.common.query;

const Search = ({onPress, color}) => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const onChangeText = debounce(e => dispatch(setQuery(e)), 1000);

  useEffect(() => {
    return () => {
      dispatch(setQuery(''));
    };
  }, []);

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
