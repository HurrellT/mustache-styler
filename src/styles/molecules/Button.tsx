import font from '../layout/font';
import spacing from '../layout/spacing';
import { remToPixel } from '../layout/styleFunctions';
import themes from '../theme/themes';

const containerStructure = {
  borderRadius: remToPixel(0.25),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.mini_m,
};

const textStructure = {
  fontSize: remToPixel(0.875),
  // fontFamily: font.fw600,
  paddingHorizontal: spacing.mini_xs,
  justifyContent: 'center',
  textAlign: 'center',
};

const buttonContainerStyle = (theme, disabled) => {
  const primaryColor = {
    backgroundColor: themes[theme].mainColor,
  };
  const primaryDisabledColor = {
    backgroundColor: themes[theme].mainDisabledColor,
  };
  const secondaryColor = {
    borderWidth: 1,
    backgroundColor: themes[theme].transparent,
    borderColor: themes[theme].mainColor,
  };
  const secondaryDisabledColor = {
    borderWidth: 1,
    backgroundColor: themes[theme].foregroundLighten,
    borderColor: themes[theme].mainDisabledColor,
  };
  const linkColor = { backgroundColor: themes[theme].transparent };
  const flatColor = { backgroundColor: themes[theme].transparent };
  return {
    primary: {
      ...containerStructure,
      ...(disabled ? primaryDisabledColor : primaryColor),
    },
    secondary: {
      ...containerStructure,
      ...(disabled ? secondaryDisabledColor : secondaryColor),
    },
    link: {
      ...containerStructure,
      ...linkColor,
    },
    flat: {
      ...containerStructure,
      ...flatColor,
    },
  };
};

export const buttonTextStyle = (theme: any, disabled: boolean) => {
  return {
    primary: {
      ...textStructure,
      color: themes[theme].textColorLighten,
    },
    secondary: {
      ...textStructure,
      color: disabled
        ? themes[theme].mainDisabledColorDarken
        : themes[theme].mainColor,
    },
    link: {
      ...textStructure,
      color: disabled
        ? themes[theme].mainDisabledColorDarken
        : themes[theme].mainColor,
    },
    flat: {
      ...textStructure,
      color: disabled
        ? themes[theme].mainDisabledColorDarken
        : themes[theme].mainColor,
    },
  };
};

export default buttonContainerStyle;
