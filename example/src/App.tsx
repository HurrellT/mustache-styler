import { ThemeProvider } from 'mutache-styler';
import * as React from 'react';
import Home from './Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
