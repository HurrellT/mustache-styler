import { StyleSheet } from 'react-native';
import FontSize from '../designSystem/FontSize';
import Height from '../designSystem/Height';
import Spacing from '../designSystem/Spacing';
import type ThemeType from '../designSystem/themes/ThemeType';

const ButtonStyles = (theme: ThemeType) => ({
  container: StyleSheet.create({
    common: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingStart: Spacing.sm,
      paddingEnd: Spacing.sm,
      borderRadius: 4,
    },
    small: {
      height: Height.sm,
    },
    medium: {
      height: Height.md,
    },
    large: {
      height: Height.lg,
    },
    primary: {
      backgroundColor: theme.button.primaryBackground,
    },
    primaryDisabled: {
      backgroundColor: theme.button.primaryBackgrounDisabled,
    },
    secondary: {
      backgroundColor: theme.button.secondaryBackground,
      borderColor: theme.button.secondaryBorderColor,
      borderWidth: 1,
    },
    secondaryDisabled: {
      backgroundColor: theme.button.secondaryBackgroundDisabled,
      borderColor: theme.button.secondaryBorderColorDisabled,
    },
    stretch: {
      width: 100,
    },
  }),
  text: StyleSheet.create({
    primary: {
      color: theme.button.primaryTextColor,
    },
    primaryDisabled: {
      color: theme.button.primaryTextColorDisabled,
    },
    secondary: {
      color: theme.button.secondaryTextColor,
    },
    secondaryDisabled: {
      color: theme.button.secondaryTextColorDisabled,
    },
    small: {
      fontSize: FontSize.sm,
    },
    medium: {
      fontSize: FontSize.md,
    },
    large: {
      fontSize: FontSize.lg,
    },
  }),
});

export default ButtonStyles;
