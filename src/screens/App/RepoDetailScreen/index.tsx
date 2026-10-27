import React from 'react';
import {useQuery} from '@tanstack/react-query';

import Screen from 'components/Screen';
import Text from 'components/Text';
import View from 'components/View';
import {getRepoDetail} from 'apis';
import Repo from 'asset/svg/repo-icon.svg';
import Fork from 'asset/svg/fork.svg';
import type {RootStackScreenProps} from 'navigation/types';
import {useIconColor} from 'theme';

interface IconTextProps {
  text?: React.ReactNode;
  icon?: React.ReactNode;
}

const IconText = ({text, icon}: IconTextProps) => {
  const iconColor = useIconColor();

  return (
    <View className="flex-row items-center">
      {icon || <Repo color={iconColor} />}
      <Text className="ml-2">{text}</Text>
    </View>
  );
};

const RepoDetailScreen = ({route}: RootStackScreenProps<'repoDetail'>) => {
  const {
    params: {itemId},
  } = route;
  const iconColor = useIconColor();

  const {isPending, data} = useQuery({
    queryKey: ['getRepoDetail', {id: itemId}] as const,
    queryFn: getRepoDetail,
  });

  if (isPending || !data)
    return (
      <Screen edges={['left', 'right', 'bottom']}>
        <View className="px-3">
          <Text text="Loading..." />
        </View>
      </Screen>
    );

  return (
    <Screen edges={['left', 'right', 'bottom']}>
      <View className="px-3">
        <Text className="text-2xl font-bold mb-5">{data?.name}</Text>
        <View className="my-6">
          <Text>{data?.description}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <IconText text={data?.stargazers_count} />
          <IconText text={data?.watchers_count} />
          <IconText
            text={data?.forks_count}
            icon={<Fork color={iconColor} />}
          />
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
