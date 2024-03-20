import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigationParamsType = {
  RootBottomNavigation: undefined;
};

export type TypedNativeStackScreenProps<
  T extends keyof RootNavigationParamsType,
> = NativeStackScreenProps<RootNavigationParamsType, T>;
