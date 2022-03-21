import React from 'react';
import Text from '@component/Text';
import Input from '@component/Input';
import {useQuery} from 'react-query';
import {fetchRepo} from '../../../apis';
import Screen from '@component/Screen';

const HomeScreen = () => {
  const {loading, data} = useQuery('fetch-repo', fetchRepo);

  if (loading) return <Text text="Loading..." />;

  return (
    <Screen>
      <Input className="mb-5" />
      {data?.map(d => (
        <Text key={d?.id} text={d?.name} />
      ))}
    </Screen>
  );
};

export default HomeScreen;
