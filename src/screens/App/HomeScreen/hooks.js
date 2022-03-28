import {useState, useCallback, useRef} from 'react';
import {useInfiniteQuery} from 'react-query';
import {fetchRepo} from 'apis';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const selectQuery = state => state.common.query;

const useHooks = () => {
  // ============= STATE
  const {push} = useNavigation();

  const query = useSelector(selectQuery);

  const [show, setShow] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // ============= HOOKS
  // ======================= REF
  const flatListRef = useRef(null);

  // ======================= REACT QUERY
  const {refetch, fetchNextPage, hasNextPage, ...result} = useInfiniteQuery(
    ['fetch-repo', {per_page: 10, query}],
    fetchRepo,
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = lastPage.total_count / 10 ?? 0;
        const nextPage = allPages.length + 1 ?? 0;

        return nextPage <= maxPage ? nextPage : undefined;
      },
    },
  );

  // ============= ACTION

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch({refetchPage: (page, index) => index === 0}); // only refetch the first page
    setRefreshing(false);
  }, []);

  const onEndReached = async () => {
    if (hasNextPage) await fetchNextPage();
  };

  return {
    ...result,
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
