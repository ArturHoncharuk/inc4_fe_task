import { FontAwesome6 } from '@expo/vector-icons';
import { View } from 'react-native';

import { styles } from './styles';

import { useAppSelector } from '@/shared/lib/hooks/use-redux';
// eslint-disable-next-line import/extensions
import { transactionStatusColor } from '@/shared/lib/status.color';
import { Typography } from '@/shared/ui/typography';

export const TransactionPrimaryInformation = () => {
  const { transaction } = useAppSelector((state) => state.transactionDetails);

  return (
    <View style={styles.container}>
      <FontAwesome6 name="money-bill-transfer" size={16} color="white" />
      <Typography numberOfLines={4} extraStyles={styles.hash} variant="MEDIUM">
        {transaction?.hash}
      </Typography>
      <View style={styles.details}>
        <Typography
          numberOfLines={1}
          extraStyles={styles.statusKey}
          variant="NORMAL"
        >
          Status:{' '}
        </Typography>
        <Typography
          numberOfLines={1}
          extraStyles={{
            ...styles.statusKey,
            color: transactionStatusColor(transaction?.status),
          }}
          variant="BOLD"
        >
          {transaction?.status}
        </Typography>
      </View>
    </View>
  );
};
