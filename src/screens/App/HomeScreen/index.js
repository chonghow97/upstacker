import React from 'react';
import Text from 'components/Text';
import Empty from 'components/Empty';
import Screen from 'components/Screen';
import EmptyIcon from 'asset/svg/empty.svg';
import RepoListContainer from 'containers/RepoList';
import {ActivityIndicator} from 'react-native';
import useHooks from './hooks';

const HomeScreen = () => {
  const {
    isLoading,
    push,
    isError,
    isSuccess,
    onRefresh,
    isRefetching,
    ...repoProps
  } = useHooks();

  const renderContent = () => {
    if (isSuccess)
      return (
        <RepoListContainer {...repoProps} onRefresh={onRefresh} push={push} />
      );
    if (isLoading || isRefetching) {
      return (
        <Empty
          icon={<EmptyIcon width={300} height={350} />}
          title="Loading"
          content={<ActivityIndicator size="large" />}
        />
      );
    }
    if (isError)
      return (
        <Empty
          icon={<EmptyIcon width={300} height={350} />}
          title="Alamak"
          content={
            <Text
              onPress={onRefresh}
              className="text-xs text-center font-bold"
              text="Something went wrong while displaying"
            />
          }
        />
      );
    return null;
  };

  return <Screen>{renderContent()}</Screen>;
};

export default HomeScreen;
