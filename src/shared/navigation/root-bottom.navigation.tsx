import { Text } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { RootNavigationParamsType } from './navigation.types';
import { ListsScreen } from '@/screens/lists';
import { BottomNavigationLayout } from '../ui/navigation';

const BottomStack = createBottomTabNavigator<RootNavigationParamsType>();

const RootBottomNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export function RootBottomNavigation() {
  return (
    <BottomStack.Navigator
      tabBar={BottomNavigationLayout}
      screenOptions={RootBottomNavigationOptions}
    >
      <BottomStack.Screen name="ListsStack" component={ListsScreen} />
      <BottomStack.Screen name="StatusScreen" component={ListsScreen} />
    </BottomStack.Navigator>
  );
}
