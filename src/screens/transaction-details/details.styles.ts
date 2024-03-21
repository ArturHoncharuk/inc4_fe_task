import { StyleSheet } from 'react-native';

import { COLORS } from '@/shared/config';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 32,
  },
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
  navigationBack: {
    marginLeft: -8,
    marginTop: 16,
  },
  expand: {
    marginTop: 24,
    color: COLORS.grayDarker,
  },
});
