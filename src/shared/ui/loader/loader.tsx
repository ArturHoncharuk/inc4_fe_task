import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

export const Loader = () => {
  const loaderStyle: StyleProp<ViewStyle> = {
    marginTop: '10%',
  };

  return <ActivityIndicator style={loaderStyle} color="white" />;
};
