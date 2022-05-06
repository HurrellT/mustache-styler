import colors from '../layout/colors';

export type BaseColorsType = {
  [key: string]: string;
};

// const pinkColors: BaseColorsType = {
const pink: BaseColorsType = {
  bgLightest: colors.white,
  bgLighten: colors.white300,
  bg: colors.grey200,
  bgDarken: colors.grey600,
  foreground: colors.white100,
  foregroundLighten: colors.white,
  textColorDarken: colors.black,
  textColor: colors.black100,
  textColorLighten: colors.white,
  shadow: colors.grey700,
  mainDisabledColorLighten: colors.white300,
  mainDisabledColor: colors.grey300,
  mainDisabledColorDarken: colors.grey600,
  mainColorLighten: '#EEB9DE',
  mainColor: '#DD86C3',
  mainColorDarken: '#692153',
  infoLighten: colors.white300,
  info: colors.black700,
  warningLighten: colors.yellow100,
  warning: colors.yellow200,
  successLighten: colors.green100,
  success: colors.green,
  errorLighten: colors.red100,
  error: colors.red,
  transparent: colors.transparent,
};

export default pink;
// export default pinkColors;
