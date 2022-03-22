import React from 'react';
import {useQuery} from 'react-query';

import Screen from 'components/Screen';
import Text from 'components/Text';
import {getRepoDetail} from 'apis';

const RepoDetailScreen = ({route}) => {
  const {
    params: {itemId},
  } = route;

  const {loading, data, error, refetch} = useQuery(
    ['getRepoDetail', {id: itemId}],
    getRepoDetail,
  );

  if (loading) return <Text text="Loading..." />;

  console.log(data);

  return (
    <Screen>
      <Text>{data?.name}</Text>
      <Text>{data?.description}</Text>
      <Text>{data?.stargazers_count}</Text>
      <Text>{data?.watchers_count}</Text>
      <Text>{data?.forks_count}</Text>
      <Text>{data?.language}</Text>
    </Screen>
  );
};

export default RepoDetailScreen;
