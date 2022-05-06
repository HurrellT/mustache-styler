import { useContext } from 'react';
import { ThemeContext } from '../../organisms/ThemeProvider';

const useTheme = (): string => {
  return useContext(ThemeContext);
};

export default useTheme;
