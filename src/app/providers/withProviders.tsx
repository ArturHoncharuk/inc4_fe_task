import { NavigationContainer } from '@react-navigation/native';
import { ReactNode } from 'react';
import { StyleProp, ViewStyle, View, TextStyle } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';

import { COLORS, FONT_FAMILY } from '@/shared/config';
import { store } from '@/shared/config/store';

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

  const textStyles: StyleProp<TextStyle> = {
    color: COLORS.black,
    fontFamily: FONT_FAMILY.MEDIUM,
  };

  return (
    <Provider store={store}>
      <ToastProvider warningColor="white" textStyle={textStyles}>
        <View style={wrapperStyle} onLayout={onLayoutRootView}>
          <NavigationContainer>{children}</NavigationContainer>
        </View>
      </ToastProvider>
    </Provider>
  );
}
