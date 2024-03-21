import { styles } from './status.styles';

import { useFetchStatus } from '@/entities/status/lib/use-fetch-status';
import { BaseLayout } from '@/shared/ui/layouts/base-layout';
import { Typography } from '@/shared/ui/typography';
import { StatusDetails } from '@/widgets/status/ui/details';

export function StatusScreen() {
  useFetchStatus();
  return (
    <BaseLayout>
      <Typography
        adjustsFontSizeToFit
        extraStyles={styles.heading}
        variant="BOLD"
      >
        Status
      </Typography>

      <StatusDetails />
    </BaseLayout>
  );
}
