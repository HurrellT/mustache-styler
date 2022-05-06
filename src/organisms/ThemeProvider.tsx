import React, { ReactNode } from 'react';

export const ThemeContext = React.createContext('base');

type ThemeProviderType = {
  children: ReactNode;
  theme: string;
};

const ThemeProvider = ({ children, theme }: ThemeProviderType) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
