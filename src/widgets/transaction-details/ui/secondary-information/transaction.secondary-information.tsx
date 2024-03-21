import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { $date } from '@/shared/lib/date';
import { useAppSelector } from '@/shared/lib/hooks/use-redux';
import { Typography } from '@/shared/ui/typography';

type ExpandedTransactionState = {
  icon: keyof typeof MaterialIcons.glyphMap;
  value: string | number;
};

export const TransactionSecondaryInformation = () => {
  const { transaction } = useAppSelector((state) => state.transactionDetails);

  const [transactionExpandedData] = useState<ExpandedTransactionState[]>([
    { icon: 'call-received', value: transaction?.from ?? 'undefined' },
    { icon: 'gas-meter', value: transaction?.gasUsed ?? 'undefined' },
    {
      icon: 'watch',
      value: $date(transaction?.timestamp) ?? 'undefined',
    },
    { icon: 'adjust', value: transaction?.type ?? 'undefined' },
    { icon: '123', value: transaction?.nonce ?? 'undefined' },
  ]);

  return (
    <View style={styles.container}>
      {transactionExpandedData.map((item) => (
        <View key={item.icon} style={styles.row}>
          <MaterialIcons name={item.icon} size={24} color="white" />
          <Typography variant="MEDIUM" extraStyles={styles.detail}>
            {item.value}
          </Typography>
        </View>
      ))}
    </View>
  );
};
