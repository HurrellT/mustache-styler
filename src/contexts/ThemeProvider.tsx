import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    console.log('Toggle theme');
    setIsDark((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
