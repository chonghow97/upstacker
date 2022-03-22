import React from 'react';
import {FlatList, ScrollView, RefreshControl} from 'react-native';
import {useQuery} from 'react-query';
import {fetchRepo} from 'apis';
import Text from 'components/Text';
import Input from 'components/Input';
import Screen from 'components/Screen';
import RepoList from 'containers/RepoList';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {loading, data, error, refetch} = useQuery(
    ['fetch-repo', {per_page: 10}],
    fetchRepo,
  );
  const [refreshing, setRefreshing] = React.useState(false);

  const {push} = useNavigation();

  console.log(data);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  if (error) return <Text text="Error" />;
  if (!data || loading) return <Text text="Loading..." />;

  const renderItem = ({item}) => {
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
    <Screen>
      <Input placeholder="Search" className="mb-5" />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </Screen>
  );
};

export default HomeScreen;
