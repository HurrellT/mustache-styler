import type { ReactNode } from 'react';

export type PaletteType = {
  [key: string]: string;
};
export type ThemeObjectType = {
  [key: string]: { [key: string]: string | number };
};
export type ThemeStyleType = {
  theme: string;
  size?: string | number;
  disabled?: boolean;
  aligment?: 'left' | 'right' | 'center' | 'stretch'; // verticalAligment & horizontalAligment ????
};
export type useThemedStylesType = {
  styleFunction: Function;
  disabled?: boolean;
  size?: number | string;
  aligment?: string;
};
export type ThemeProviderType = {
  children: ReactNode;
  theme: 'base' | 'pink';
};
