import { NavigationContainer } from '@react-navigation/native';
import { ReactNode } from 'react';

export function withProviders({ children }: { children: ReactNode }) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
