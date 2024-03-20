import { SafeAreaView } from 'react-native';

import { styles } from './base-layout.styles';

// import { SafeAreaView } from 'react-native-safe-area-context';

export const BaseLayout = () => {
  return <SafeAreaView style={styles.wrapper} />;
};
