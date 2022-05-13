import type {
  ThemeContextType,
  ThemesType,
} from 'example/src/designSystem/themes/ThemeType';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import allThemes from '../../example/src/designSystem/themes/allThemes';
import type { ComponentsStyles } from '../../example/src/styles/allComponentStyles';
import AllComponentStyles from '../../example/src/styles/allComponentStyles';

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'base',
});

const ThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: ThemesType;
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useComponentTheme = (componentName: ComponentsStyles) => {
  const theme = useContext(ThemeContext);
  const currentTheme = allThemes[theme.currentTheme];
  return AllComponentStyles[componentName](currentTheme);
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default ThemeProvider;
