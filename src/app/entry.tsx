import { registerRootComponent } from 'expo';
import SplashScreen from 'expo-splash-screen';

import { BaseLayout } from '@/shared/ui/layouts/base-layout';

SplashScreen.preventAutoHideAsync();

export default function Entry() {
  return <BaseLayout />;
}

registerRootComponent(Entry);
