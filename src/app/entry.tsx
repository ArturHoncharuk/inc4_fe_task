import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

import { BaseLayout } from '@/shared/ui/layouts/base-layout';

SplashScreen.preventAutoHideAsync();

export default function Entry() {
  const [fontsLoaded, fontError] = useFonts({
    // eslint-disable-next-line global-require, import/extensions
    MontserratRegular: require('@/shared/assets/fonts/Montserrat-Regular.ttf'),
    // eslint-disable-next-line global-require, import/extensions
    MontserratMedium: require('@/shared/assets/fonts/Montserrat-Medium.ttf'),
    // eslint-disable-next-line global-require, import/extensions
    MontserratBold: require('@/shared/assets/fonts/Montserrat-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <BaseLayout />
    </View>
  );
}

registerRootComponent(Entry);
