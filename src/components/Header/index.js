import {View} from 'react-native';
import React from 'react';
import Input from '../Input';
import Github from 'asset/svg/github.svg';
import Search from 'asset/svg/search.svg';

import {useTailwind} from 'tailwind-rn';

const Header = props => {
  const tw = useTailwind();
  const {color} = tw('text-black dark:text-white');

  return (
    <View style={tw('flex-row w-[95%] justify-between items-center h-12')}>
      <Github fill={color} height={40} width={60} />
      <Search fill={color} style={tw('-mt-1')} />
      {/* <Input className="flex-1" /> */}
    </View>
  );
};

export default Header;
