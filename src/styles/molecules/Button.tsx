import spacing from '../layout/spacing';
import { remToPixel } from '../layout/styleFunctions';
import baseColors from '../theme/baseColors';
import themes from '../theme/themes';

const containerStructure = {
  borderRadius: remToPixel(0.25),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.mini_m,
};

const smallButtonContainer = {
  ...containerStructure,
  paddingVertical: 'mini_xxs',
};

const buttonContainerStyle = (theme: any) => {
  const stretchButtonContainer = { justifyContent: 'space-between' };

  const primaryColor = {
    backgroundColor: themes[theme].button.container.primary, // por ahi puedo reducirlo a los colores basicos
  };
  const primaryDisabledColor = {
    backgroundColor: baseColors.mainDisabledColor,
  };
  const secondaryColor = {
    borderWidth: 1,
    backgroundColor: themes[theme].button.container.secondary,
    borderColor: themes[theme].button.containerBorder.secondary,
  };
  const secondaryDisabledColor = {
    borderWidth: 1,
    backgroundColor: baseColors.foregroundLighten,
    borderColor: baseColors.mainDisabledColor,
  };
  const linkColor = { backgroundColor: themes[theme].button.container.link };
  const flatColor = { backgroundColor: themes[theme].button.container.flat };
  return {
    primary: {
      ...containerStructure,
      ...primaryColor,
    },
    secondary: {
      ...containerStructure,
      ...secondaryColor,
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

export const buttonTextStyle = (theme: any) => {
  return {
    primary: {
      color: themes[theme].button.text.primary,
    },
    secondary: {
      color: themes[theme].button.text.secondary,
    },
    link: {
      color: themes[theme].button.text.link,
    },
    flat: {
      color: themes[theme].button.text.flat,
    },
  };
};

export default buttonContainerStyle;
