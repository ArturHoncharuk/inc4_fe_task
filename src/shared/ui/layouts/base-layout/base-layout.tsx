import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './base-layout.styles';

interface IBaseLayout {
  children: ReactNode;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <SafeAreaView edges={{ top: 'additive' }} style={styles.wrapper}>
      {children}
    </SafeAreaView>
  );
};
