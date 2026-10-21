# Table of Contents
- http-common.js
- apis.js
- App/Provider.js
- App/index.js
- asset/svg/_template/index.js
- util/index.js
- navigation/RootNavigator.js
- navigation/AppNavigator.js
- screens/RNMain/index.js
- screens/App/index.js
- screens/App/Test/index.js
- screens/App/Test/Counter.js
- screens/App/_template/index.js
- screens/App/RepoDetailScreen/index.js
- screens/App/HomeScreen/hooks.js
- screens/App/HomeScreen/index.js
- components/RepoList/index.js
- components/Empty/index.js
- components/ScrollTop/index.js
- components/Input/index.js
- components/ToucableOpacity/index.js
- components/Screen/index.js
- components/View/index.js
- components/Text/index.js
- components/Header/index.js
- components/Header/Search.js
- theme/index.js
- containers/RepoList/index.js
- redux/configureStore.js
- redux/ducks/user.js
- redux/ducks/common.js
- redux/sagas/rootSaga.js
- redux/sagas/handler/user.js
- redux/sagas/requests/user.js

## File: http-common.js

- Extension: .js
- Language: javascript
- Size: 123 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.github.com/users/reactjs',
});

```

## File: apis.js

- Extension: .js
- Language: javascript
- Size: 728 bytes
- Created: 2024-12-15 00:53:23
- Modified: 2024-12-15 00:53:23

### Code

```javascript
import axios from 'axios';
import {TOKEN} from '@env';

axios.defaults.baseURL = 'https://api.github.com/';
axios.defaults.headers = {
  'user-Agent': 'request',
  Authorization: `token ${TOKEN}`,
};

export const api = axios;

export const fetchRepo = async ({signal, queryKey, pageParam = 0}) => {
  const [_key, {per_page, query}] = queryKey;
  const {data} = await api.get(`/search/repositories?q=${query}+user:reactjs`, {
    params: {per_page, page: pageParam, sort: 'stars', direction: 'desc'},
    signal,
  });

  return data;
};

export const getRepoDetail = async ({signal, queryKey}) => {
  const [_key, {id}] = queryKey;

  const {data} = await api.get(`repos/reactjs/${id}`, {
    signal,
  });

  return data;
};

```

## File: App/Provider.js

- Extension: .js
- Language: javascript
- Size: 434 bytes
- Created: 2026-03-08 19:52:25
- Modified: 2026-03-08 19:52:25

### Code

```javascript
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from 'redux/configureStore';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const Provider = ({children}) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </ReduxProvider>
);

export default Provider;

```

## File: App/index.js

- Extension: .js
- Language: javascript
- Size: 240 bytes
- Created: 2025-09-19 20:54:52
- Modified: 2025-09-19 20:54:52

### Code

```javascript
import React from 'react';
import Provider from './Provider';
import RootNavigator from '../navigation/RootNavigator';
import '../../global.css';

const App = () => (
  <Provider>
    <RootNavigator />
  </Provider>
);

export default App;

```

## File: asset/svg/_template/index.js

- Extension: .js
- Language: javascript
- Size: 352 bytes
- Created: 2026-03-08 19:52:52
- Modified: 2026-03-08 19:52:52

### Code

```javascript
import React from 'react';
import {View as RNView} from 'react-native';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';

const View = ({className, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('', className));

  return <RNView style={myStyle} {...restProps} />;
};

export default View;

```

## File: util/index.js

- Extension: .js
- Language: javascript
- Size: 320 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
// export const isIos = Platform.OS === 'ios';

export const debounce = (func, timeout = 300) => {
  // src: https://www.freecodecamp.org/news/javascript-debounce-example/
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

```

## File: navigation/RootNavigator.js

- Extension: .js
- Language: javascript
- Size: 1503 bytes
- Created: 2026-03-08 19:52:33
- Modified: 2026-03-08 19:52:33

### Code

```javascript
import React from 'react';
import HomeScreen from 'screens/App/HomeScreen';
import TestScreen from 'screens/App/Test';
import RepoDetailScreen from 'screens/App/RepoDetailScreen';
import Header from 'components/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useTailwind} from 'nativewind';

const RootNavigator = () => {
  const tw = useTailwind();
  const {color} = tw('text-black dark:text-white');

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="app">
        <Stack.Screen
          name="test"
          options={{title: 'Test', headerShown: false}}
          component={TestScreen}
        />
        <Stack.Screen
          name="app"
          options={{
            title: 'React Community',
            headerShown: true,
            headerTitle: Header,
            headerStyle: [tw('dark:bg-gray-800')],
            headerTintColor: color,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="repoDetail"
          component={RepoDetailScreen}
          options={{
            title: '',
            fullScreenGestureEnabled: true,
            headerShown: true,
            headerStyle: tw('dark:bg-gray-800'),
            headerTintColor: color,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

```

## File: navigation/AppNavigator.js

- Extension: .js
- Language: javascript
- Size: 180 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import {View, Text} from 'react-native';
import React from 'react';

const AppNavigator = () => (
  <View>
    <Text>AppNavigator</Text>
  </View>
);

export default AppNavigator;

```

## File: screens/RNMain/index.js

- Extension: .js
- Language: javascript
- Size: 2298 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

```

## File: screens/App/index.js

- Extension: .js
- Language: javascript
- Size: 30 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
export * from './HomeScreen';

```

## File: screens/App/Test/index.js

- Extension: .js
- Language: javascript
- Size: 1159 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import Text from 'components/Text';
import View from 'components/View';
import Screen from 'components/Screen';
import {getUser} from 'redux/ducks/user';
import {useDispatch, useSelector} from 'react-redux';
import Counter from './Counter';

// const selectUser = state => state.user;

const TestScreen = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.common.count);
  const voters = [
    'Anthony Sistilli',
    'Bob Smith',
    'Stephanie Foo',
    'Kelvin Ma',
  ];

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // const user = useSelector(selectUser);

  return (
    <Screen>
      <Text className="text-2xl font-bold text-center" text="Redux Made Easy" />
      <View className=" m-14 flex">
        <Text className="text-lg font-bold text-center ">
          Count : {counter}
        </Text>
        <FlatList
          data={voters}
          keyExtractor={(_e, i) => i.toString()}
          renderItem={({item}) => <Counter name={item} />}
        />
      </View>
    </Screen>
  );
};

export default TestScreen;

```

## File: screens/App/Test/Counter.js

- Extension: .js
- Language: javascript
- Size: 1028 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import React, {useState} from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {increment, decrement} from 'redux/ducks/common';
import Text from 'components/Text';

import View from 'components/View';

const Counter = ({name}) => {
  const [votes, setVotes] = useState(0);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increment());
    setVotes(prev => prev + 1);
  };

  const onDescrease = () => {
    dispatch(decrement());
    setVotes(prev => prev - 1);
  };
  return (
    <View className="my-3">
      <Text
        className="text-lg font-bold text-center"
        text={name || 'Anoymous'}
      />
      <Text
        className="text-lg font-bold text-center"
        text={`Votes: ${votes}`}
      />
      <View className="flex-row items-center justify-center">
        <Button title="Decrement" onPress={onDescrease} />
        <Button title="Increment" onPress={onIncrease} />
      </View>
    </View>
  );
};

export default Counter;

```

## File: screens/App/_template/index.js

- Extension: .js
- Language: javascript
- Size: 651 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
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

const TestScreen = () => <Screen>{/* {Your shit here} */}</Screen>;

export default TestScreen;

```

## File: screens/App/RepoDetailScreen/index.js

- Extension: .js
- Language: javascript
- Size: 1647 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import React from 'react';
import {useQuery} from 'react-query';

import Screen from 'components/Screen';
import Text from 'components/Text';
import View from 'components/View';
import {getRepoDetail} from 'apis';
import Repo from 'asset/svg/repo-icon.svg';
import Fork from 'asset/svg/fork.svg';
import {useTailwind} from 'tailwind-rn';

const IconText = ({text, icon, color}) => (
  <View className="flex-row">
    {icon || <Repo fill={color} />}
    <Text className="ml-2">{text}</Text>
  </View>
);

const RepoDetailScreen = ({route}) => {
  const tw = useTailwind();
  const {color} = tw('text-black dark:text-white');

  const {
    params: {itemId},
  } = route;

  const {loading, data} = useQuery(
    ['getRepoDetail', {id: itemId}],
    getRepoDetail,
  );

  if (loading || !data)
    return (
      <Screen>
        <View className="px-3">
          <Text text="Loading..." />
        </View>
      </Screen>
    );

  return (
    <Screen>
      <View className="px-3">
        <Text className="text-2xl font-bold mb-5">{data?.name}</Text>
        <View className="my-6">
          <Text className="">{data?.description}</Text>
        </View>
        <View className="flex-row justify-between">
          <IconText text={data?.stargazers_count} color={color} />
          <IconText text={data?.watchers_count} color={color} />
          <IconText text={data?.forks_count} icon={<Fork fill={color} />} />
          <IconText
            text={data?.language}
            icon={<View className="w-3 h-3 bg-yellow-500 rounded-full" />}
          />
        </View>
      </View>
    </Screen>
  );
};

export default RepoDetailScreen;

```

## File: screens/App/HomeScreen/hooks.js

- Extension: .js
- Language: javascript
- Size: 1498 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
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

```

## File: screens/App/HomeScreen/index.js

- Extension: .js
- Language: javascript
- Size: 1324 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import React from 'react';
import Text from 'components/Text';
import Empty from 'components/Empty';
import Screen from 'components/Screen';
import EmptyIcon from 'asset/svg/empty.svg';
import RepoListContainer from 'containers/RepoList';
import {ActivityIndicator} from 'react-native';
import useHooks from './hooks';

const HomeScreen = () => {
  const {
    isLoading,
    push,
    isError,
    isSuccess,
    onRefresh,
    isRefetching,
    ...repoProps
  } = useHooks();

  const renderContent = () => {
    if (isSuccess)
      return (
        <RepoListContainer {...repoProps} onRefresh={onRefresh} push={push} />
      );
    if (isLoading || isRefetching) {
      return (
        <Empty
          icon={<EmptyIcon width={300} height={350} />}
          title="Loading"
          content={<ActivityIndicator size="large" />}
        />
      );
    }
    if (isError)
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
    return null;
  };

  return <Screen>{renderContent()}</Screen>;
};

export default HomeScreen;

```

## File: components/RepoList/index.js

- Extension: .js
- Language: javascript
- Size: 1200 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import Text from 'components/Text';
import {View, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Repo from 'asset/svg/repo-icon.svg';

import React from 'react';

const RepoList = ({title, description, ...restProps}) => {
  const tw = useTailwind();

  const {color} = tw('text-gray-800 dark:text-gray-200');

  return (
    <TouchableOpacity
      style={tw(
        'h-20 border dark:border-0 dark:bg-gray-800 px-3 pt-1.5 pb-3 mb-5 rounded',
      )}
      {...restProps}>
      <Text
        numberOfLines={1}
        className="text-xs border-2 px-3 text-right absolute top-2 right-2 bg-gray-400 dark:bg-blue-200  rounded-full text-white dark:text-gray-600"
        text="Public"
      />

      <View style={tw('flex-row items-center ')}>
        <Repo fill={color} style={tw('mr-2')} />
        <Text
          numberOfLines={1}
          className="text-lg font-bold dark:text-blue-500 mb-1"
          text={title}
        />
      </View>
      <Text
        numberOfLines={2}
        className="text-sm text-gray-600 dark:text-gray-200"
        text={description || 'No Description'}
      />
    </TouchableOpacity>
  );
};

export default RepoList;

```

## File: components/Empty/index.js

- Extension: .js
- Language: javascript
- Size: 826 bytes
- Created: 2026-03-08 19:52:51
- Modified: 2026-03-08 19:52:51

### Code

```javascript
import {View, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';
import EmptyIcon from 'asset/svg/empty.svg';

const Empty = ({icon, content, title, className, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('flex justify-center items-center', className));
  return (
    <View style={myStyle} {...restProps}>
      <View style={tw('dark:bg-gray-200 dark:p-10 dark:rounded-lg')}>
        {icon || <EmptyIcon width={300} height={350} />}
      </View>
      {title && (
        <View style={tw('mt-12')}>
          <Text style={tw('text-lg font-bold text-center dark:text-white')}>
            {title}
          </Text>
          {content || ''}
        </View>
      )}
    </View>
  );
};

export default Empty;

```

## File: components/ScrollTop/index.js

- Extension: .js
- Language: javascript
- Size: 811 bytes
- Created: 2026-03-08 19:52:49
- Modified: 2026-03-08 19:52:49

### Code

```javascript
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';
import ArrowUp from 'asset/svg/arrow-up.svg';

const ScrollTop = ({className, show, trigger, onPress, ...restProps}) => {
  const tw = useTailwind();

  const onPressTop = () => {
    trigger?.current?.scrollToOffset({animated: true, y: 0});
    onPress?.();
  };

  const myStyle = tw(
    classNames(
      'bg-gray-400 dark:bg-blue-200 z-10 w-12 h-12 flex items-center justify-center rounded-full absolute bottom-12 right-3',
      className,
    ),
  );

  return (
    show && (
      <TouchableOpacity style={myStyle} onPress={onPressTop} {...restProps}>
        <ArrowUp fill="#fff" />
      </TouchableOpacity>
    )
  );
};

export default ScrollTop;

```

## File: components/Input/index.js

- Extension: .js
- Language: javascript
- Size: 895 bytes
- Created: 2026-03-08 19:52:48
- Modified: 2026-03-08 19:52:48

### Code

```javascript
import {TextInput, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';
import Repo from 'asset/svg/search.svg';

const Input = ({className, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(
    classNames(
      'flex-row items-center px-1.5 bg-gray-300 rounded dark:bg-transparent dark:border-white dark:border',
      className,
    ),
  );

  const {color} = tw('text-gray-800 dark:text-gray-200');

  return (
    <View style={myStyle}>
      <Repo fill={color} style={tw('p-2 mr-1')} />

      <TextInput
        style={tw('dark:text-white px-1.5 py-3 flex-1')}
        autoCorrect={false}
        returnKeyType="search"
        spellCheck={false}
        autoCapitalize="none"
        {...restProps}
        placeholderTextColor={color}
      />
    </View>
  );
};

export default Input;

```

## File: components/ToucableOpacity/index.js

- Extension: .js
- Language: javascript
- Size: 532 bytes
- Created: 2026-03-08 19:52:47
- Modified: 2026-03-08 19:52:47

### Code

```javascript
import React from 'react';
import {TouchableOpacity as O, Text} from 'react-native';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';

export const ToucableOpacity = ({item, className, style, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('border px-1.5 py-3 mb-5 rounded', className));

  return (
    <O {...restProps} style={[myStyle, style]}>
      <Text text={item?.name} />
      <Text text={item?.description} />
    </O>
  );
};

export default ToucableOpacity;

```

## File: components/Screen/index.js

- Extension: .js
- Language: javascript
- Size: 770 bytes
- Created: 2026-03-08 19:52:45
- Modified: 2026-03-08 19:52:45

### Code

```javascript
import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';

// const isIos = Platform.OS === 'ios';

export const Screen = props => {
  const {children, className, onScroll, ...restProps} = props;
  const tw = useTailwind();

  const myStyle = tw(
    classNames('flex flex-1 bg-white dark:bg-black', className),
  );

  return (
    <SafeAreaView style={myStyle} {...restProps}>
      {onScroll ? (
        <FlatList
          ListHeaderComponent={
            <View style={tw('pt-3 px-1.5')}>{children}</View>
          }
        />
      ) : (
        <View style={tw('pt-3 px-1.5')}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Screen;

```

## File: components/View/index.js

- Extension: .js
- Language: javascript
- Size: 352 bytes
- Created: 2026-03-08 19:52:38
- Modified: 2026-03-08 19:52:38

### Code

```javascript
import React from 'react';
import {View as RNView} from 'react-native';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';

const View = ({className, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('', className));

  return <RNView style={myStyle} {...restProps} />;
};

export default View;

```

## File: components/Text/index.js

- Extension: .js
- Language: javascript
- Size: 457 bytes
- Created: 2026-03-08 19:52:36
- Modified: 2026-03-08 19:52:36

### Code

```javascript
import {Text as RNText} from 'react-native';
import React from 'react';
import {useTailwind} from 'nativewind';
import classNames from 'classnames';

const Text = ({children, className, text, style, ...restProps}) => {
  const tw = useTailwind();

  const myStyle = tw(classNames('text-black dark:text-white', className));

  return (
    <RNText style={[myStyle, style]} {...restProps}>
      {text || children}
    </RNText>
  );
};

export default Text;

```

## File: components/Header/index.js

- Extension: .js
- Language: javascript
- Size: 885 bytes
- Created: 2026-03-08 19:52:35
- Modified: 2026-03-08 19:52:35

### Code

```javascript
import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Github from 'asset/svg/github.svg';
import SearchIcon from 'asset/svg/search.svg';
import {useTailwind} from 'nativewind';
import Search from './Search';

const Header = () => {
  const tw = useTailwind();
  const [state, setState] = useState(false);

  const onPress = () => setState(prev => !prev);

  const {color} = tw('text-black dark:text-white');

  return (
    <View style={tw('flex-row w-[95%] justify-between items-center')}>
      {!state && (
        <>
          <Github fill={color} height={40} width={60} />
          <TouchableOpacity onPress={onPress}>
            <SearchIcon fill={color} style={tw('-mt-1')} />
          </TouchableOpacity>
        </>
      )}
      {state && <Search onPress={onPress} color={color} />}
    </View>
  );
};

export default Header;

```

## File: components/Header/Search.js

- Extension: .js
- Language: javascript
- Size: 740 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';

import {setQuery} from 'redux/ducks/common';
import ArrowLeft from 'asset/svg/arrowLeft.svg';

import {debounce} from 'util';
import Input from '../Input';

const Search = ({onPress, color}) => {
  const dispatch = useDispatch();

  const onChangeText = debounce(e => dispatch(setQuery(e)), 1000);

  useEffect(
    () => () => {
      dispatch(setQuery(''));
    },
    [],
  );

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <ArrowLeft fill={color} />
      </TouchableOpacity>
      <Input onChangeText={onChangeText} className="flex-1 ml-3" />
    </>
  );
};

export default Search;

```

## File: theme/index.js

- Extension: .js
- Language: javascript
- Size: 125 bytes
- Created: 2026-03-08 19:52:30
- Modified: 2026-03-08 19:52:30

### Code

```javascript
import {useTailwind} from 'nativewind';

const tw = useTailwind();

export const {color} = tw('text-black dark:text-white');

```

## File: containers/RepoList/index.js

- Extension: .js
- Language: javascript
- Size: 1862 bytes
- Created: 2026-03-08 19:52:39
- Modified: 2026-03-08 19:52:39

### Code

```javascript
import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import Text from 'components/Text';
import ScrollTop from 'components/ScrollTop';
import RepoList from 'components/RepoList';

import {useTailwind} from 'nativewind';

const RepoListContainer = props => {
  const tw = useTailwind();

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

  const {color} = tw('text-black dark:text-white');

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
          <RefreshControl
            color={color}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
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

```

## File: redux/configureStore.js

- Extension: .js
- Language: javascript
- Size: 606 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
// eslint-disable-next-line import/no-extraneous-dependencies
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import commonReducer from './ducks/common';
import userReducer from './ducks/user';
import {watcherSaga} from './sagas/rootSaga';

const reducer = combineReducers({
  common: commonReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);
export default store;

```

## File: redux/ducks/user.js

- Extension: .js
- Language: javascript
- Size: 423 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
export const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

export const getUser = () => ({type: GET_USER});
export const setUser = user => ({type: SET_USER, user});

const initialState = {
  user: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const {user} = action;
      return {...state, user};
    }

    default:
      return state;
  }
};

```

## File: redux/ducks/common.js

- Extension: .js
- Language: javascript
- Size: 656 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const SET_QUERY = 'setQuery';

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const setQuery = query => ({type: SET_QUERY, query});

const initialState = {
  count: 0,
  query: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    case SET_QUERY: {
      const {query} = action;
      return {...state, query};
    }

    default:
      return state;
  }
};

```

## File: redux/sagas/rootSaga.js

- Extension: .js
- Language: javascript
- Size: 220 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import {takeLatest} from 'redux-saga/effects';
import {useHandleGetUser} from './handler/user';
import {GET_USER} from '../ducks/user';

export function* watcherSaga() {
  yield takeLatest(GET_USER, useHandleGetUser);
}

```

## File: redux/sagas/handler/user.js

- Extension: .js
- Language: javascript
- Size: 342 bytes
- Created: 2024-11-06 21:41:51
- Modified: 2024-11-06 21:41:51

### Code

```javascript
import {call, put} from 'redux-saga/effects';
import {setUser} from '../../ducks/user';
import {requestGetUser} from '../requests/user';

export function* useHandleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const {data} = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

```

## File: redux/sagas/requests/user.js

- Extension: .js
- Language: javascript
- Size: 119 bytes
- Created: 2024-12-15 00:45:36
- Modified: 2024-12-15 00:45:36

### Code

```javascript
import {api} from 'apis';

export const requestGetUser = async () =>
  api.get('/search/repositories?q=user:reactjs');

```

