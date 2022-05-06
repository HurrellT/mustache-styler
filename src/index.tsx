// export function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }
import Box from './atoms/Box';
import Content from './atoms/Content';
import Button from './molecules/Button';
import ThemeProvider from './organisms/ThemeProvider';
import useTheme from './styles/layout/useTheme';
import useThemedStyles from './styles/layout/useThemedStyles';

export { Box, Content };

export { Button };

export { ThemeProvider, useTheme, useThemedStyles };
