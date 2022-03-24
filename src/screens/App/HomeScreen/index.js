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
    ...repoProps
  } = useHooks();

  return (
    <Screen>
      <Input onChangeText={onChange} placeholder="Search" className="mb-5" />
      {isLoading && <Text text="Loading..." />}
      {isError && <Text text="Error" onPress={onRefresh} />}
      {isSuccess && <RepoListContainer {...repoProps} onRefresh={onRefresh} />}
    </Screen>
  );
};

export default HomeScreen;
