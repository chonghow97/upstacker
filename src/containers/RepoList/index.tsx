import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import type {ListRenderItem} from 'react-native';
import type {InfiniteData} from '@tanstack/react-query';
import Text from 'components/Text';
import ScrollTop from 'components/ScrollTop';
import RepoList from 'components/RepoList';
import type {Repo, RepoSearchResult} from 'apis';
import type {RootStackNavigation} from 'navigation/types';

export interface Props {
  data?: InfiniteData<RepoSearchResult>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  show: boolean;
  setShow: (show: boolean) => void;
  refreshing: boolean;
  flatListRef: React.RefObject<FlatList<RepoSearchResult> | null>;
  push: RootStackNavigation['push'];
  onEndReached: () => void;
  onRefresh: () => void;
}

const RepoListContainer = (props: Props) => {
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

  const renderItem: ListRenderItem<RepoSearchResult> = ({item: items}) => {
    const renderList: ListRenderItem<Repo> = ({item}) => {
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
      <FlatList
        data={items?.items}
        keyExtractor={i => i.id.toString()}
        renderItem={renderList}
      />
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
      {(data?.pages[0]?.items?.length ?? 0) > 5 && (
        <ScrollTop
          trigger={flatListRef as React.RefObject<FlatList<unknown> | null>}
          show={show}
          onPress={() => setShow(false)}
        />
      )}
    </>
  );
};

export default RepoListContainer;
