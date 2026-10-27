import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Github from 'asset/svg/github.svg';
import SearchIcon from 'asset/svg/search.svg';
import {useIconColor} from 'theme';
import Search from './Search';

const Header = () => {
  const [state, setState] = useState(false);
  const iconColor = useIconColor();

  const onPress = () => setState(prev => !prev);

  return (
    <View className="flex-row w-[95%] justify-between items-center">
      {!state && (
        <>
          <Github height={40} width={60} color={iconColor} />
          <TouchableOpacity onPress={onPress}>
            <SearchIcon className="-mt-1" color={iconColor} />
          </TouchableOpacity>
        </>
      )}
      {state && <Search onPress={onPress} />}
    </View>
  );
};

export default Header;
