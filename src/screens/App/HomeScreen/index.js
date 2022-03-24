import React from 'react';
import useHooks from './hooks';
import Text from 'components/Text';
import Input from 'components/Input';
import Empty from 'components/Empty';
import Screen from 'components/Screen';
import EmptyIcon from 'asset/svg/empty.svg';
import RepoListContainer from 'containers/RepoList';

const HomeScreen = () => {
  const {
    isLoading,
    push,
    isError,
    isSuccess,
    onChange,
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
    if (isError || true)
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

  return (
    <Screen>
      <Input onChangeText={onChange} placeholder="Search" className="mb-5" />
      {renderContent()}
    </Screen>
  );
};

export default HomeScreen;
