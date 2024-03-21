/* eslint-disable global-require */
/* eslint-disable import/extensions */
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

interface IReturnedSplash {
  fontsLoaded: boolean;
  fontError: Error | null;
  onLayoutRootView: () => Promise<void>;
}

/**
 * Function to handle layout changes in the root view of the app.
 * Hides the splash screen if fonts are loaded successfully or if there was a font loading error.
 * @returns {Promise<void>} A promise that resolves after hiding the splash screen.
 */
export function useAsyncSplash(): IReturnedSplash {
  const [fontsLoaded, fontError] = useFonts({
    MontserratRegular: require('@/shared/assets/fonts/Montserrat-Regular.ttf'),
    MontserratMedium: require('@/shared/assets/fonts/Montserrat-Medium.ttf'),
    MontserratBold: require('@/shared/assets/fonts/Montserrat-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return { fontsLoaded, fontError, onLayoutRootView };
}
