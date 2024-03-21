import React from 'react';
import { styles } from './bottom-navigation.styles';
import { BOTTOM_NAVIGATION_ROUTES } from '@/shared/config/routes';
import { bottomIconResolver } from '@/shared/lib/navigation-icon.resolver';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';

type IBottomNavigationLayoutProps = BottomTabBarProps;

export const BottomNavigationLayout = ({
  state,
  descriptors,
  navigation,
}: IBottomNavigationLayoutProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (state.index !== index && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            testID={options.tabBarTestID}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}
          >
            {bottomIconResolver({
              checked: state.index === index,
              label: BOTTOM_NAVIGATION_ROUTES[index].label,
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
