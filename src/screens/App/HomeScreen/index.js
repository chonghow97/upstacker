import React from 'react';
import useHooks from './hooks';
import Text from 'components/Text';
import Empty from 'components/Empty';
import Screen from 'components/Screen';
import EmptyIcon from 'asset/svg/empty.svg';
import RepoListContainer from 'containers/RepoList';
import {useSelector} from 'react-redux';

const selectQuery = state => state.common.query;

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
    if (isLoading || isRefetching) return <Empty />;
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
  };
  const query = useSelector(selectQuery);

  return <Screen>{renderContent()}</Screen>;
};

export default HomeScreen;
