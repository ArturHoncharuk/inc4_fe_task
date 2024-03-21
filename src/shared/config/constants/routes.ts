type BottomNavigationKeys = 'label';

type OBottomNavigationRecordedType = Record<
  BottomNavigationKeys,
  'Lists' | 'Status'
>[];

export const BOTTOM_NAVIGATION_ROUTES: OBottomNavigationRecordedType = [
  { label: 'Lists' },
  {
    label: 'Status',
  },
];
