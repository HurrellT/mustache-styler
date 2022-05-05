import { ThemeProvider } from 'mutache-styler';
import * as React from 'react';
import Home from './Home';
import theme from './styles/themes/base';
import darkTheme from './styles/themes/dark';

export default function App() {
  return (
    <ThemeProvider lightTheme={theme} darkTheme={darkTheme}>
      <Home />
    </ThemeProvider>
  );
}
