import {useState, useCallback, useRef} from 'react';
import type {FlatList} from 'react-native';
import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';
import type {InfiniteData} from '@tanstack/react-query';
import {fetchRepo} from 'apis';
import type {FetchRepoKey, RepoSearchResult} from 'apis';
import {useAppSelector} from '@redux/hooks';
import type {RootState} from '@redux/configureStore';
import {useNavigation} from '@react-navigation/native';
import type {RootStackNavigation} from 'navigation/types';

const selectQuery = (state: RootState) => state.common.query;

const useHooks = () => {
  // ============= STATE
  const {push} = useNavigation<RootStackNavigation>();

  const query = useAppSelector(selectQuery);

  const [show, setShow] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // ============= HOOKS
  // ======================= REF
  const flatListRef = useRef<FlatList<RepoSearchResult>>(null);

  // ======================= REACT QUERY
  const queryClient = useQueryClient();
  const queryKey: FetchRepoKey = ['fetch-repo', {per_page: 10, query}];

  const {refetch, fetchNextPage, hasNextPage, isPending, ...result} = useInfiniteQuery({
    queryKey,
    queryFn: fetchRepo,
    // react-query v3 defaulted pageParam to 0 in fetchRepo; v5 requires it explicitly
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const maxPage = lastPage.total_count / 10;
      const nextPage = allPages.length + 1;

      return nextPage <= maxPage ? nextPage : undefined;
    },
  });

  // ============= ACTION

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    // only refetch the first page (v5 removed refetch({refetchPage}); trim the cache to page 1, then refetch)
    queryClient.setQueryData<InfiniteData<RepoSearchResult, number>>(queryKey, data =>
      data ? {pages: data.pages.slice(0, 1), pageParams: data.pageParams.slice(0, 1)} : data,
    );
    await refetch();
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryClient, refetch, query]);

  const onEndReached = async () => {
    if (hasNextPage) await fetchNextPage();
  };

  return {
    ...result,
    // react-query v3's isLoading (no data yet) is isPending in v5
    isLoading: isPending,
    hasNextPage,
    show,
    setShow,
    push,
    refreshing,
    flatListRef,
    onRefresh,
    onEndReached,
  };
};

export default useHooks;
