import type AllThemes from './allThemes';

export type ThemeType = typeof AllThemes.base;

export type ThemesType =
  | 'base'
  | keyof { [key in keyof typeof AllThemes]: string };

export type ThemeContextType = {
  currentTheme: ThemesType;
  setCurrentTheme?: React.Dispatch<React.SetStateAction<ThemesType>>;
};
