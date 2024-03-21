import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { styles } from './details.styles';

import { useFetchTransactionDetailsById } from '@/entities/transaction-details/lib/use-fetch-transaction-details';
import { useAppSelector } from '@/shared/lib/hooks/use-redux';
import { TypedNativeStackScreenProps } from '@/shared/navigation';
import { BaseLayout } from '@/shared/ui/layouts/base-layout';
import { Loader } from '@/shared/ui/loader';
import { Typography } from '@/shared/ui/typography';
import { TransactionPrimaryInformation } from '@/widgets/transaction-details/ui/primary-information';
import { TransactionSecondaryInformation } from '@/widgets/transaction-details/ui/secondary-information';

type TransactionDetailsScreenProps =
  TypedNativeStackScreenProps<'TransactionDetailsScreen'>;

export function TransactionDetailsScreen({
  navigation,
  route,
}: TransactionDetailsScreenProps) {
  const [expandedTransactionDetails, setExpandedTransactionDetails] =
    useState(false);

  const { fetching } = useAppSelector((state) => state.transactionDetails);
  useFetchTransactionDetailsById(route.params.hashId);

  const toggleExpandedTransactionDetails = () =>
    setExpandedTransactionDetails((prevState) => !prevState);

  return (
    <BaseLayout>
      <View style={styles.header}>
        <Typography
          adjustsFontSizeToFit
          extraStyles={styles.heading}
          variant="BOLD"
        >
          Details
        </Typography>

        <TouchableOpacity
          style={styles.navigationBack}
          hitSlop={20}
          onPress={navigation.goBack}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {fetching ? (
        <Loader />
      ) : (
        <ScrollView
          overScrollMode="auto"
          contentContainerStyle={styles.contentContainerStyle}
        >
          <TransactionPrimaryInformation />

          {!expandedTransactionDetails ? (
            <Typography
              onPress={toggleExpandedTransactionDetails}
              extraStyles={styles.expand}
              variant="MEDIUM"
            >
              See more
            </Typography>
          ) : (
            <TransactionSecondaryInformation />
          )}
        </ScrollView>
      )}
    </BaseLayout>
  );
}
