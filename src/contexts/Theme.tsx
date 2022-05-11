import React, { createContext, useContext } from 'react';
import type { ThemesType } from 'example/src/designSystem/themes/ThemeType';
import allThemes from '../../example/src/designSystem/themes/allThemes';
import type { ComponentsStyles } from '../../example/src/styles/allComponentStyles';
import AllComponentStyles from '../../example/src/styles/allComponentStyles';

export const ThemeContext = createContext<ThemesType>('base');

const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (componentName: ComponentsStyles) => {
  const theme = useContext(ThemeContext);
  const currentTheme = allThemes[theme];
  return AllComponentStyles[componentName](currentTheme);
};

export default ThemeProvider;
