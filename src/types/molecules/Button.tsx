import type { ReactNode } from 'react';
import type { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export type BoxType = {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'link' | 'flat';
  size?: 'medium' | 'small';
  disabled?: boolean;
  stretch?: boolean;
  styles?: Object;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  activeOpacity?: number;
  headingIcon?: string;
  trailingIcon?: string;
};
