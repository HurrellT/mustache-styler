import { useContext } from 'react';
import { ThemeContext } from '../../organisms/ThemeProvider';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
