import React from 'react';
import {FlatList} from 'react-native';
import Text from 'components/Text';
import View from 'components/View';
import Screen from 'components/Screen';

import {useSelector} from 'react-redux';
import Counter from './Counter';

const TestScreen = () => {
  const counter = useSelector(state => state.counter.count);
  const voters = [
    'Anthony Sistilli',
    'Bob Smith',
    'Stephanie Foo',
    'Kelvin Ma',
  ];

  return (
    <Screen>
      <Text className="text-2xl font-bold text-center" text="Redux Made Easy" />
      <View className=" m-14 flex">
        <Text className="text-lg font-bold text-center ">
          Count : {counter}
        </Text>
        <FlatList
          data={voters}
          keyExtractor={(_e, i) => i.toString()}
          renderItem={({item}) => <Counter name={item} />}
        />
      </View>
    </Screen>
  );
};

export default TestScreen;
