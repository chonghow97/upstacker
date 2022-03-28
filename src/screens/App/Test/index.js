import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import Text from 'components/Text';
import View from 'components/View';
import Screen from 'components/Screen';
import {getUser} from 'redux/ducks/user';
import {useDispatch, useSelector} from 'react-redux';
import Counter from './Counter';

// const selectUser = state => state.user;

const TestScreen = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.count);
  const voters = [
    'Anthony Sistilli',
    'Bob Smith',
    'Stephanie Foo',
    'Kelvin Ma',
  ];

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // const user = useSelector(selectUser);

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
