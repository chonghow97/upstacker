import React from 'react';
import { useQuery } from 'react-query';

import Screen from 'components/Screen';
import Text from 'components/Text';
import View from 'components/View';
import { getRepoDetail } from 'apis';
import Repo from 'asset/svg/repo-icon.svg';
import Fork from 'asset/svg/fork.svg';

const IconText = ({ text, icon }) => (
  <View className="flex-row items-center">
    {icon || <Repo />}
    <Text className="ml-2">{text}</Text>
  </View>
);

const RepoDetailScreen = ({ route }) => {
  const {
    params: {itemId},
  } = route;

  const { loading, data } = useQuery(
    ['getRepoDetail', {id: itemId}],
    getRepoDetail,
  );

  if (loading || !data)
    return (
      <Screen>
        <View className="px-3">
          <Text text="Loading..." />
        </View>
      </Screen>
    );

  return (
    <Screen>
      <View className="px-3">
        <Text className="text-2xl font-bold mb-5">{data?.name}</Text>
        <View className="my-6">
          <Text>{data?.description}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <IconText text={data?.stargazers_count} />
          <IconText text={data?.watchers_count} />
          <IconText text={data?.forks_count} icon={<Fork />} />
          <IconText
            text={data?.language}
            icon={<View className="w-3 h-3 bg-yellow-500 rounded-full" />}
          />
        </View>
      </View>
    </Screen>
  );
};

export default RepoDetailScreen;
