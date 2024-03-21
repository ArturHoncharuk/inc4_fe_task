import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigationParamsType = {
  RootBottomNavigation: undefined;

  // Navigation Stacks
  ListsStack: undefined;
  StatusScreen: undefined;
};

export type TypedNativeStackScreenProps<
  T extends keyof RootNavigationParamsType,
> = NativeStackScreenProps<RootNavigationParamsType, T>;
