import { createContext, useContext } from 'react';
import type { ComponentsStyles } from '../styles/allComponentStyles';
import AllComponentStyles from '../styles/allComponentStyles';
import allThemes from '../designSystem/themes/allThemes';

export const ThemeContext = createContext<'trading' | 'cripto'>('trading');

export const useTheme = (componentName: ComponentsStyles) => {
  const theme = useContext(ThemeContext);
  const currentTheme = allThemes[theme];
  return AllComponentStyles[componentName](currentTheme);
};
