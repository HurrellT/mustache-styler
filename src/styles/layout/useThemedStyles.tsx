import type { useThemedStylesType } from '../../types/theme/Theming';
import useTheme from './useTheme';

// Devuelvo una función que a la vez me devuelve el estilo según el theme que le paso y la opción si está deshabilitado
const useThemedStyles = ({
  styleFunction,
  disabled,
  size,
  aligment,
}: useThemedStylesType) => {
  const theme = useTheme();
  return styleFunction({ theme, disabled, size, aligment });
};

// Me gusta más así pero no sé si es más correcto
// const useThemedStyles = (
//   styleFunction: Function,
//   disabled?: boolean,
//   size?: number | string,
//   aligment?: string
// ) => {
//   const theme = useTheme();
//   return styleFunction({ theme, disabled, size, aligment });
// };

export default useThemedStyles;
