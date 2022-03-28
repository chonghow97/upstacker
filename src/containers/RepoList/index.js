import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import Text from 'components/Text';
import ScrollTop from 'components/ScrollTop';
import RepoList from 'components/RepoList';

const RepoListContainer = props => {
  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    show,
    setShow,
    refreshing,
    flatListRef,
    push,
    onEndReached,
    onRefresh,
  } = props;

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
      {data?.pages[0]?.items?.length > 5 && (
        <ScrollTop
          trigger={flatListRef}
          show={show}
          onPress={() => setShow(false)}
        />
      )}
    </>
  );
};

export default RepoListContainer;
