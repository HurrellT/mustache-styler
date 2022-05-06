import React, { ReactNode } from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useTheme from '../styles/layout/useTheme';
import spacing from '../styles/layout/spacing';
import useThemedStyles from '../styles/layout/useThemedStyles';
import buttonContainerStyle, {
  buttonTextStyle,
} from '../styles/molecules/Button';

type BoxType = {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'link' | 'flat';
  size?: 'medium' | 'small';
  disabled?: boolean;
  stretch?: boolean;
  styles?: Object;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  activeOpacity?: number;
  // headingIcon:
  // trailingIcon:
  // FALTA WITH ICON ;___;
};

const Button = ({
  children,
  variant,
  size = 'medium',
  disabled = false,
  stretch = false,
  activeOpacity = 0.8,
  onPress,
  styles,
}: BoxType) => {
  const exampleTheme = useTheme();
  // El hook resuelve esto useThemedStyles
  // const getTheme = useTheme();
  // const containerStyle = buttonContainerStyle(getTheme, disabled);
  const containerStyle = useThemedStyles(buttonContainerStyle, disabled);
  const textStyle = useThemedStyles(buttonTextStyle, disabled);

  console.log(
    `\x1b[42mcontainerStyle, theme ${exampleTheme}\x1b[0m`,
    containerStyle
  );
  console.log(`\x1b[45mtextStyle, theme ${exampleTheme}\x1b[0m`, textStyle);

  // REVISAR
  // Esto podría ser un hook que devuelva el objeto de estilos extra según lo que pasen
  // Acá se puede sumar el tema del icon
  // Estos estilos no están tan relacionados al color como a la estrcutura,
  // por eso podrían pensarse por separado
  const containerSize =
    size === 'small' ? { paddingVertical: spacing.micro_xxs } : {};
  const containerFlex = stretch ? { justifyContent: 'space-between' } : {};

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={styles} // el espaciado podría ser una prop más, que solo permita margin
    >
      <View style={[containerStyle[variant], containerSize, containerFlex]}>
        <Text style={textStyle[variant]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
