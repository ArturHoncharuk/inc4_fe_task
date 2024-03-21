import { COLORS } from '@/shared/config';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.1,
    borderTopColor: COLORS.gray,
  },
});
