import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { useAsyncSplash } from '@/shared/lib/hooks';
import { BaseLayout } from '@/shared/ui/layouts/base-layout';
import { RootBottomNavigation } from '@/shared/navigation';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

const wrapperStyle: StyleProp<ViewStyle> = {
  flex: 1,
};

export default function Entry() {
  const { fontsLoaded, fontError, onLayoutRootView } = useAsyncSplash();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={wrapperStyle} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <RootBottomNavigation />
      </NavigationContainer>
    </View>
  );
}

registerRootComponent(Entry);
