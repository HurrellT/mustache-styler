import type { ThemeStyleType } from '../../types/theme/Theming';
import spacing from '../layout/spacing';
import { remToPixel } from '../layout/styleFunctions';
import themes from '../theme/themes';

const buttonContainerStyle = ({
  theme,
  disabled,
  size,
  aligment,
}: ThemeStyleType) => {
  // Conditional Styles
  const containerSize =
    size === 'small' ? { paddingVertical: spacing.mini_xxs } : {};
  const containerAligment =
    aligment === 'stretch'
      ? { justifyContent: 'space-between' }
      : { justifyContent: 'center' };

  // Common Structure
  const containerStructure = {
    borderRadius: remToPixel(0.25),
    flexDirection: 'row',
    padding: spacing.mini_m,
    ...containerSize,
    ...containerAligment,
  };

  // Colors
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

  // Variants
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

export const buttonTextStyle = ({ theme, disabled }: ThemeStyleType) => {
  // Common Structure
  const textStructure = {
    fontSize: remToPixel(0.875),
    // fontFamily: font.fw600,
    paddingHorizontal: spacing.mini_xs,
    justifyContent: 'center',
    textAlign: 'center',
  };

  // Variants
  return {
    primary: {
      ...textStructure,
      color: themes[theme].textColorLighten,
    },
    secondary: {
      ...textStructure,
      color: disabled
        ? themes[theme].mainDisabledColor
        : themes[theme].mainColor,
    },
    link: {
      ...textStructure,
      color: disabled
        ? themes[theme].mainDisabledColor
        : themes[theme].mainColor,
    },
    flat: {
      ...textStructure,
      color: disabled
        ? themes[theme].mainDisabledColor
        : themes[theme].textColor,
    },
  };
};

export default buttonContainerStyle;
