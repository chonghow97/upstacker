import React from 'react';
import useHooks from './hooks';
import Text from 'components/Text';
import Input from 'components/Input';
import Screen from 'components/Screen';
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
      return <RepoListContainer {...repoProps} onRefresh={onRefresh} />;
    if (isLoading || isRefetching) return <Text text="Loading..." />;
    if (isError) return <Text text="Error" onPress={onRefresh} />;
  };

  return (
    <Screen>
      <Input onChangeText={onChange} placeholder="Search" className="mb-5" />
      {renderContent()}
    </Screen>
  );
};

export default HomeScreen;
