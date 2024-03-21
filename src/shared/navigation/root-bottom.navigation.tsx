import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { RootNavigationParamsType } from './navigation.types';
import { TransactionStackNavigation } from './transactions-stack.navigation';
import { BottomNavigationLayout } from '../ui/navigation';

import { StatusScreen } from '@/screens/status';

const BottomStack = createBottomTabNavigator<RootNavigationParamsType>();

const RootBottomNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export function RootBottomNavigation() {
  return (
    <BottomStack.Navigator
      initialRouteName="ListsStack"
      tabBar={BottomNavigationLayout}
      screenOptions={RootBottomNavigationOptions}
    >
      <BottomStack.Screen
        name="ListsStack"
        component={TransactionStackNavigation}
      />
      <BottomStack.Screen name="StatusScreen" component={StatusScreen} />
    </BottomStack.Navigator>
  );
}
