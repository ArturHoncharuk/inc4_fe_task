import { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './status.card.styles';
import { Typography } from '../typography';

interface IStatusCardProps {
  children: ReactNode;
  heading: string;
}

export const StatusCard = ({ children, heading }: IStatusCardProps) => {
  return (
    <View style={styles.container}>
      <Typography extraStyles={styles.heading} variant="MEDIUM">
        {heading}
      </Typography>

      {children}
    </View>
  );
};
