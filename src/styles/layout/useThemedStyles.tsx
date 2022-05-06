import useTheme from './useTheme';

// Devuelvo una función que a la vez me devuelve el estilo según el theme que le paso y la opción si está deshabilitado
const useThemedStyles = (
  style: (theme: string, disabled: boolean) => Object,
  disabled: boolean
): Object => {
  const theme = useTheme();
  return style(theme, disabled);
};

export default useThemedStyles;

// PROBLEMAS
// Si lo tipeo se me rompe todo, creo que es porque lo estoy definiendo mal
type useThemedStylesType = {
  style: (theme: string, disabled: boolean) => Object;
  disabled: boolean;
};
// const useThemedStyles = ({ style, disabled }: useThemedStylesType) => {
//   const theme = useTheme();
//   return style(theme, disabled);
// };
