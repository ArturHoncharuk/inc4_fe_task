export type FontKeysType = 'NORMAL' | 'MEDIUM' | 'BOLD';

type OFontFamilyType = Record<FontKeysType, string>;

export const FONT_FAMILY: OFontFamilyType = {
  NORMAL: 'MontserratRegular',
  MEDIUM: 'MontserratMedium',
  BOLD: 'MontserratBold',
};
