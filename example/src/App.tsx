import { ThemeProvider } from 'mutache-styler';
import React from 'react';
import Home from './components/Home';
import { Themes } from './designSystem/themes/allThemes';

export default function App() {
  return (
    <ThemeProvider theme={Themes.base}>
      <Home />
    </ThemeProvider>
  );
}
