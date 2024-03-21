import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from '../config';

interface IBottomIconResolverParams {
  checked: boolean;
  label: 'Lists' | 'Status';
}

export const bottomIconResolver = ({
  checked,
  label,
}: IBottomIconResolverParams) => {
  switch (label) {
    case 'Lists': {
      return (
        <MaterialIcons
          name="format-list-bulleted"
          size={24}
          color={checked ? 'white' : COLORS.gray}
        />
      );
    }
    case 'Status': {
      return (
        <MaterialCommunityIcons
          name="list-status"
          size={24}
          color={checked ? 'white' : COLORS.gray}
        />
      );
    }
    default: {
      return null;
    }
  }
};
