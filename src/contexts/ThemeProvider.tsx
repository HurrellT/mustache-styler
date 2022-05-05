import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';

export interface KnownBaseTheme {
  colors: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: number | string;
  };
  breakpoints: {
    [key: string]: Breakpoint;
  };
  zIndices?: {
    [key: string]: number;
  };
  borderRadii?: {
    [key: string]: number;
  };
}

export interface BaseTheme extends KnownBaseTheme {
  [key: string]: any;
}

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: {},
});

// TODO: Move this type
type ThemeProviderType = {
  children: Element;
  theme: StyleSheet.NamedStyles<any>;
};

const ThemeProvider = ({ children, theme: userTheme }: ThemeProviderType) => {
  const [isDark, setIsDark] = useState(false);
  const theme = {
    ...userTheme,
  };

  const toggleTheme = () => {
    setIsDark((prevState) => {
      return !prevState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
