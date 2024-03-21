import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { RootNavigationParamsType } from './navigation.types';

import { ListsScreen } from '@/screens/lists';
import { TransactionDetailsScreen } from '@/screens/transaction-details';

const TransactionsStack =
  createNativeStackNavigator<RootNavigationParamsType>();

const TransactionsStackNavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animationTypeForReplace: 'push',
};

export function TransactionStackNavigation() {
  return (
    <TransactionsStack.Navigator
      screenOptions={TransactionsStackNavigationOptions}
    >
      <TransactionsStack.Screen
        name="TransactionsScreen"
        component={ListsScreen}
      />
      <TransactionsStack.Screen
        name="TransactionDetailsScreen"
        component={TransactionDetailsScreen}
      />
    </TransactionsStack.Navigator>
  );
}
