import { MaterialIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import { COLORS } from '@/shared/config';
import { $date } from '@/shared/lib/date';
import { useAppSelector } from '@/shared/lib/hooks/use-redux';
import { Loader } from '@/shared/ui/loader';
import { StatusCard } from '@/shared/ui/status-card';
import { Typography } from '@/shared/ui/typography';

export const StatusDetails = () => {
  const { status, fetching } = useAppSelector((state) => state.status);

  const isLimitHigherThanUsed = useMemo(() => {
    if (status) {
      const { avgBlockGasLimit, avgBlockGasUsed } = status;

      return avgBlockGasLimit > avgBlockGasUsed
        ? COLORS.success
        : COLORS.danger;
    }

    return COLORS.danger;
  }, [status]);

  const isPendingTransactionsAvailable = useMemo(() => {
    if (status) {
      const {
        transactions: { pending },
      } = status;

      return pending > 0 ? COLORS.success : COLORS.danger;
    }

    return COLORS.danger;
  }, [status]);

  if (fetching) {
    return <Loader />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusCard heading="Common">
        <View style={styles.commonWrapper}>
          <View>
            <View style={styles.network}>
              <MaterialIcons name="network-ping" size={24} color="white" />
              <Typography variant="BOLD">
                {status?.network.toUpperCase()}
              </Typography>
            </View>

            <Typography
              variant="MEDIUM"
              extraStyles={styles.typographySecondary}
            >
              {$date(status?.timestamp)}
            </Typography>
          </View>

          <View style={styles.containerWithHeading}>
            <Typography>AVG Block Time</Typography>
            <Typography
              variant="MEDIUM"
              extraStyles={{
                ...styles.typographySecondary,
                color: isLimitHigherThanUsed,
              }}
            >
              {status?.avgBlockTime}
            </Typography>
          </View>
        </View>
      </StatusCard>

      <StatusCard heading="Validator Pool">
        <Typography extraStyles={styles.typographySecondary} variant="BOLD">
          {status?.validatorsPool}
        </Typography>
      </StatusCard>

      <StatusCard heading="AVG Block Gas Used">
        <Typography
          extraStyles={{
            ...styles.typographySecondary,
            color: COLORS.success,
          }}
          variant="BOLD"
        >
          {status?.avgBlockGasUsed}
        </Typography>
      </StatusCard>
      <StatusCard heading="AVG Block Gas Limit">
        <Typography
          extraStyles={{
            ...styles.typographySecondary,
            color: COLORS.danger,
          }}
          variant="BOLD"
        >
          {status?.avgBlockGasLimit}
        </Typography>
      </StatusCard>

      <StatusCard heading="Supply">
        <Typography extraStyles={styles.typographySecondary} variant="BOLD">
          {status?.totalSupply}
        </Typography>
      </StatusCard>

      <StatusCard heading="Account">
        <View style={styles.row}>
          <Typography variant="NORMAL">Balance:</Typography>
          <Typography
            extraStyles={{
              color: COLORS.success,
            }}
            variant="BOLD"
          >
            ${status?.accounts.withBalance}
          </Typography>
        </View>
        <View style={styles.row}>
          <Typography variant="NORMAL">Contracts: </Typography>
          <Typography variant="BOLD">{status?.accounts.contracts}</Typography>
        </View>
        <View style={styles.row}>
          <Typography variant="NORMAL">Total: </Typography>
          <Typography variant="BOLD">{status?.accounts.total}</Typography>
        </View>
      </StatusCard>

      <StatusCard heading="Transactions">
        <View style={styles.row}>
          <Typography variant="NORMAL">Total:</Typography>
          <Typography
            extraStyles={{
              color: COLORS.success,
            }}
            variant="BOLD"
          >
            ${status?.transactions.total}
          </Typography>
        </View>
        <View style={styles.row}>
          <Typography variant="NORMAL">Pending: </Typography>
          <Typography
            extraStyles={{
              color: isPendingTransactionsAvailable,
            }}
            variant="BOLD"
          >
            {status?.transactions.pending}
          </Typography>
        </View>
      </StatusCard>
    </ScrollView>
  );
};
