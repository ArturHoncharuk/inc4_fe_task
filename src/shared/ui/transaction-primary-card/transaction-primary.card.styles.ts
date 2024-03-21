import { StyleSheet } from 'react-native';

import { COLORS } from '@/shared/config';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  hash: {
    maxWidth: '85%',
    color: 'white',
  },
});
