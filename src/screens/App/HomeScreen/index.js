import React, {useState, useCallback, useRef, useEffect} from 'react';
import {FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {fetchRepo} from 'apis';
import Text from 'components/Text';
import Input from 'components/Input';
import Screen from 'components/Screen';
import RepoList from 'containers/RepoList';
import ScrollTop from 'components/ScrollTop';
import {useNavigation} from '@react-navigation/native';
import {debounce} from 'util';
import {useTailwind} from 'tailwind-rn';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);

  const flatListRef = useRef(null);

  useEffect(() => {
    flatListRef?.current?.scrollToOffset({animated: true, y: 0});
  }, []);

  const {
    isLoading,
    data,
    isError,
    isSuccess,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['fetch-repo', {per_page: 10, query}], fetchRepo, {
    getNextPageParam: (lastPage, allPages) => {
      const maxPage = lastPage?.total_count / 10;
      const nextPage = allPages?.length + 1;

      return nextPage <= maxPage ? nextPage : undefined;
    },
  });

  const [refreshing, setRefreshing] = useState(false);

  const {push} = useNavigation();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch({refetchPage: (page, index) => index === 0}); // only refetch the first page
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

  const onEndReached = async () => {
    if (hasNextPage) await fetchNextPage();
  };

  const onChange = debounce(value => setQuery(value), 1000);

  const tw = useTailwind();

  return (
    <Screen>
      <Input onChangeText={onChange} placeholder="Search" className="mb-5" />

      {isLoading && <Text text="Loading..." />}

      {isError && <Text text="Error" onPress={onRefresh} />}
      {isSuccess && (
        <>
          <FlatList
            ref={flatListRef}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onScrollEndDrag={() => setShow(true)}
            data={data?.pages}
            renderItem={renderItem}
            ListFooterComponent={
              <Text className="text-center mb-5 text-xs">
                {isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
              </Text>
            }
            onEndReached={onEndReached}
          />
          <ScrollTop
            trigger={flatListRef}
            show={show}
            onPress={() => setShow(false)}
          />
        </>
      )}
    </Screen>
  );
};

export default HomeScreen;
