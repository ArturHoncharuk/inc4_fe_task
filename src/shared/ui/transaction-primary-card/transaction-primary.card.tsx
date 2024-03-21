import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Pressable, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from './transaction-primary.card.styles';
import { Typography } from '../typography';

import type { ITransaction } from '@/entities/transactions/model/types';
// eslint-disable-next-line import/extensions
import { transactionStatusColor } from '@/shared/lib/status.color';
import { RootNavigationParamsType } from '@/shared/navigation';

interface ITransactionPrimaryCard {
  transaction: ITransaction;
}

export const TransactionPrimaryCard = memo(
  ({ transaction }: ITransactionPrimaryCard) => {
    const navigation: NavigationProp<RootNavigationParamsType> =
      useNavigation();

    const onTransactionPress = (): void => {
      const { hash } = transaction;
      navigation.navigate('TransactionDetailsScreen', {
        hashId: hash,
      });
    };

    return (
      <TouchableWithoutFeedback onPress={onTransactionPress}>
        <View style={styles.container}>
          <View style={styles.inner}>
            <Typography
              numberOfLines={2}
              extraStyles={styles.hash}
              variant="MEDIUM"
            >
              {transaction?.hash}
            </Typography>
            <Typography
              numberOfLines={1}
              extraStyles={{
                ...styles.status,
                color: transactionStatusColor(transaction.status),
              }}
              variant="BOLD"
            >
              {transaction?.status}
            </Typography>
          </View>

          <Pressable>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    );
  },
  (prevProps, nextProps) =>
    prevProps.transaction.hash === nextProps.transaction.hash
);
