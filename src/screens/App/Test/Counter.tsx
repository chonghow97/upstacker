import React, {useState} from 'react';
import {Button} from 'react-native';
import {useAppDispatch} from '@redux/hooks';
import {increment, decrement} from '@redux/ducks/common';
import Text from 'components/Text';

import View from 'components/View';

interface Props {
  name?: string;
}

const Counter = ({name}: Props) => {
  const [votes, setVotes] = useState(0);
  const dispatch = useAppDispatch();

  const onIncrease = () => {
    dispatch(increment());
    setVotes(prev => prev + 1);
  };

  const onDescrease = () => {
    dispatch(decrement());
    setVotes(prev => prev - 1);
  };
  return (
    <View className="my-3">
      <Text
        className="text-lg font-bold text-center"
        text={name || 'Anoymous'}
      />
      <Text
        className="text-lg font-bold text-center"
        text={`Votes: ${votes}`}
      />
      <View className="flex-row items-center justify-center">
        <Button title="Decrement" onPress={onDescrease} />
        <Button title="Increment" onPress={onIncrease} />
      </View>
    </View>
  );
};

export default Counter;
