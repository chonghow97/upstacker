import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Github from 'asset/svg/github.svg';
import SearchIcon from 'asset/svg/search.svg';
import {useTailwind} from 'tailwind-rn';
import Search from './Search';

const Header = () => {
  const tw = useTailwind();
  const [state, setState] = useState(false);

  const onPress = () => setState(prev => !prev);

  const {color} = tw('text-black dark:text-white');

  return (
    <View style={tw('flex-row w-[95%] justify-between items-center')}>
      {!state && (
        <>
          <Github fill={color} height={40} width={60} />
          <TouchableOpacity onPress={onPress}>
            <SearchIcon fill={color} style={tw('-mt-1')} />
          </TouchableOpacity>
        </>
      )}
      {state && <Search onPress={onPress} color={color} />}
    </View>
  );
};

export default Header;
