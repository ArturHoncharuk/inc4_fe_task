import { NavigationContainer } from '@react-navigation/native';
import { ReactNode } from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';

export function WithProviders({
  children,
  onLayoutRootView,
}: {
  children: ReactNode;
  onLayoutRootView: () => Promise<void>;
}) {
  const wrapperStyle: StyleProp<ViewStyle> = {
    flex: 1,
  };
  return (
    <View style={wrapperStyle} onLayout={onLayoutRootView}>
      <NavigationContainer>{children}</NavigationContainer>
    </View>
  );
}
