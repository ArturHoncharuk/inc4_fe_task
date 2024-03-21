import { FlashList } from '@shopify/flash-list';
import { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

import { styles } from './transactions-list.styles';

import { useFetchTransactions } from '@/entities/transactions/lib/use-fetch-transactions';
import { ITransaction } from '@/entities/transactions/model/types';
import { useAppSelector } from '@/shared/lib/hooks/use-redux';
import { TransactionPrimaryCard } from '@/shared/ui/transaction-primary-card';
import { Typography } from '@/shared/ui/typography';

const ITEM_HEIGHT = 70;

export const TransactionsListWithPagination = () => {
  const { fetching, fetchingNextPage, nextPageTransactions, currentPage } =
    useFetchTransactions();
  const { transactions } = useAppSelector((state) => state.transactions);

  const renderTransactionCard = useCallback(
    ({ item }: { item: ITransaction }) => (
      <TransactionPrimaryCard transaction={item} />
    ),
    [transactions]
  );

  const ListFooterComponent = useCallback(
    () =>
      fetchingNextPage && (
        <ActivityIndicator style={styles.listLoader} color="white" />
      ),
    [fetchingNextPage]
  );

  if (fetching) {
    return <ActivityIndicator style={styles.loader} color="white" />;
  }

  return (
    <>
      <Typography>
        {currentPage} | {transactions.length}
      </Typography>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={transactions}
        keyExtractor={(item) => item.hash}
        estimatedItemSize={ITEM_HEIGHT}
        ListFooterComponent={ListFooterComponent}
        removeClippedSubviews
        indicatorStyle="white"
        onEndReachedThreshold={0.00016}
        onEndReached={nextPageTransactions}
        renderItem={renderTransactionCard}
      />
    </>
  );
};
