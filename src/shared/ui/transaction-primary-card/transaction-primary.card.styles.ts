import { StyleSheet } from 'react-native';

import { COLORS } from '@/shared/config';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  hash: {
    fontSize: 14,
    maxWidth: '85%',
    color: 'white',
  },
  inner: {
    flexDirection: 'column',
  },
  status: {
    fontSize: 14,
    marginTop: 10,
  },
});
