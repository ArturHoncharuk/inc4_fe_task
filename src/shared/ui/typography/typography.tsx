import { FONT_FAMILY, FontKeysType } from '@/shared/config/fonts';
import { ReactNode } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

type ExtendedTextStyle = TextStyle & { extraStyles?: StyleProp<TextStyle> };

interface ITypographyProps extends TextProps {
  children: ReactNode;
  variant?: FontKeysType;
  extraStyles?: ExtendedTextStyle;
}

export const Typography = ({
  children,
  variant = 'NORMAL',
  extraStyles,
  ...rest
}: ITypographyProps) => {
  const typographyStyles: StyleProp<TextStyle> = {
    fontFamily: FONT_FAMILY[variant],
    fontSize: 16,
    color: 'white',
    ...(extraStyles && { ...extraStyles }),
  };

  return (
    <Text {...rest} style={typographyStyles}>
      {children}
    </Text>
  );
};
