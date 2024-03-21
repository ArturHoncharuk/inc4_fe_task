import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Pressable, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from './transaction-primary.card.styles';
import { Typography } from '../typography';

import type { ITransaction } from '@/entities/transactions/model/types';
import { RootNavigationParamsType } from '@/shared/navigation';

interface ITransactionPrimaryCard {
  transaction: ITransaction;
}

export const TransactionPrimaryCard = memo(
  ({ transaction }: ITransactionPrimaryCard) => {
    const navigation: NavigationProp<RootNavigationParamsType> =
      useNavigation();
    const onTransactionPress = (): void => {
      const { blockHash } = transaction;
      navigation.navigate('TransactionDetailsScreen', {
        blockHash,
      });
    };

    return (
      <TouchableWithoutFeedback onPress={onTransactionPress}>
        <View style={styles.container}>
          <Typography
            numberOfLines={3}
            extraStyles={styles.hash}
            variant="MEDIUM"
          >
            {transaction?.hash}
          </Typography>

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
    prevProps.transaction.blockHash === nextProps.transaction.blockHash
);
