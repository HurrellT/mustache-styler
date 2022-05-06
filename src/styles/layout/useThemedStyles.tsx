import useTheme from './useTheme';

const useThemedStyles = (style) => {
  const theme = useTheme();
  return style(theme);
};

export default useThemedStyles;
