import { styles } from './details.styles';

import { BaseLayout } from '@/shared/ui/layouts/base-layout';
import { Typography } from '@/shared/ui/typography';

export function TransactionDetailsScreen() {
  return (
    <BaseLayout>
      <Typography
        adjustsFontSizeToFit
        extraStyles={styles.heading}
        variant="BOLD"
      >
        Details
      </Typography>
    </BaseLayout>
  );
}
