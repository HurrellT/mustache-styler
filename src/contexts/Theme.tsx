import React, { createContext, useContext } from 'react';
import type { ThemesType } from 'src/designSystem/themes/ThemeType';
import allThemes from '../designSystem/themes/allThemes';
import type { ComponentsStyles } from '../styles/allComponentStyles';
import AllComponentStyles from '../styles/allComponentStyles';

export const ThemeContext = createContext<ThemesType>(undefined);

const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (componentName: ComponentsStyles) => {
  const theme = useContext(ThemeContext);
  const currentTheme = allThemes[theme!];
  return AllComponentStyles[componentName](currentTheme);
};

export default ThemeProvider;
