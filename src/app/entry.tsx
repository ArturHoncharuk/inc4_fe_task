import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { WithProviders } from './providers/withProviders';

import { useAsyncSplash } from '@/shared/lib/hooks';
import { RootBottomNavigation } from '@/shared/navigation';

SplashScreen.preventAutoHideAsync();

export function Entry() {
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
    <WithProviders onLayoutRootView={onLayoutRootView}>
      <StatusBar style="light" />
      <RootBottomNavigation />
    </WithProviders>
  );
}

registerRootComponent(Entry);
