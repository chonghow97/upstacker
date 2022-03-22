import React, {useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useInfiniteQuery, useQuery} from 'react-query';
import {fetchRepo} from 'apis';
import Text from 'components/Text';
import Input from 'components/Input';
import Screen from 'components/Screen';
import RepoList from 'containers/RepoList';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const {isLoading, data, isError, isSuccess, refetch, fetchNextPage} =
    useInfiniteQuery(['fetch-repo', {per_page: 10, pageParam: 1}], fetchRepo, {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = lastPage?.total_count / 10;
        const nextPage = allPages?.length + 1;

        return nextPage <= maxPage ? nextPage : undefined;
      },
    });

  const [refreshing, setRefreshing] = React.useState(false);

  const {push} = useNavigation();

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  const renderItem = ({item: items}) => {
    const renderList = ({item}) => {
      const onPress = () => {
        push('repoDetail', {itemId: item?.name});
      };

      return (
        <RepoList
          onPress={onPress}
          description={item?.description}
          title={item?.name}
        />
      );
    };

    return (
      <FlatList data={items?.items} key={i => i.id} renderItem={renderList} />
    );
  };

  return (
    <Screen>
      <Input placeholder="Search" className="mb-5" />

      {isLoading && <Text text="Loading..." />}
      {isError && <Text text="Error" />}

      {isSuccess && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data?.pages}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
        />
      )}
    </Screen>
  );
};

export default HomeScreen;
