import React from 'react';
import type { ThemeProviderType } from '../types/theme/Theming';

export const ThemeContext = React.createContext<'base' | 'pink'>('base');

const ThemeProvider = ({ children, theme }: ThemeProviderType) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
