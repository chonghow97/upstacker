import React, {useEffect, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';

import {setQuery} from '@redux/ducks/common';
import {useAppDispatch} from '@redux/hooks';
import ArrowLeft from 'asset/svg/arrowLeft.svg';

import {debounce} from 'util';
import {useIconColor} from 'theme';
import Input from '../Input';

interface Props {
  onPress: () => void;
}

const Search = ({onPress}: Props) => {
  const dispatch = useAppDispatch();
  const iconColor = useIconColor();

  const onChangeText = useMemo(
    () => debounce((text: string) => dispatch(setQuery(text)), 1000),
    [dispatch],
  );

  useEffect(
    () => () => {
      dispatch(setQuery(''));
    },
    [dispatch],
  );

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <ArrowLeft color={iconColor} />
      </TouchableOpacity>
      <Input onChangeText={onChangeText} className="flex-1 ml-3" />
    </>
  );
};

export default Search;
