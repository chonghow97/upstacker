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
