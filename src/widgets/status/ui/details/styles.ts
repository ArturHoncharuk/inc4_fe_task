import { StyleSheet } from 'react-native';

import { COLORS } from '@/shared/config';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    gap: 16,
  },
  commonWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  network: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  typographySecondary: {
    fontSize: 14,
    color: COLORS.grayDarker,
  },
  containerWithHeading: {
    gap: 10,
  },
  typographyTertiary: {
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 6,
  },
});
