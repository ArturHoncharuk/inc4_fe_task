import { styles } from './status.styles';

import { BaseLayout } from '@/shared/ui/layouts/base-layout';
import { Typography } from '@/shared/ui/typography';

export function StatusScreen() {
  return (
    <BaseLayout>
      <Typography
        adjustsFontSizeToFit
        extraStyles={styles.heading}
        variant="BOLD"
      >
        Status
      </Typography>
    </BaseLayout>
  );
}
