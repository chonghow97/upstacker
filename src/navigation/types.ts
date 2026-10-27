import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

// Routes registered in RootNavigator and their params
export type RootStackParamList = {
  test: undefined;
  app: undefined;
  repoDetail: {itemId: string};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
