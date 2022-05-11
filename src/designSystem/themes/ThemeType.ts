import type AllThemes from './allThemes';

// export type ThemeType = {
//   button: {
//     primaryBackground: string;
//     primaryBackgrounDisabled: string;
//     primaryTextColor: string;
//     primaryTextColorDisabled: string;
//     secondaryBackground: string;
//     secondaryBackgroundDisabled: string;
//     secondaryBorderColor: string;
//     secondaryBorderColorDisabled: string;
//     secondaryTextColor: string;
//     secondaryTextColorDisabled: string;
//   };
// };

export type ThemesType = keyof { [key in keyof typeof AllThemes]: string };

export type ThemeType = typeof AllThemes.base;
