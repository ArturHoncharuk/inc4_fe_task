import { styles } from './lists.styles';

import { BaseLayout } from '@/shared/ui/layouts/base-layout';
import { Typography } from '@/shared/ui/typography';
import { TransactionsListWithPagination } from '@/widgets/transactions/ui/transactions-list-with-pagination';

export function ListsScreen() {
  return (
    <BaseLayout>
      <Typography
        adjustsFontSizeToFit
        extraStyles={styles.heading}
        variant="BOLD"
      >
        Transactions
      </Typography>

      <TransactionsListWithPagination />
    </BaseLayout>
  );
}
