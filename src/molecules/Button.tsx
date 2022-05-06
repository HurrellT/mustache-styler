import React, { ReactNode } from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useTheme from '../styles/layout/useTheme';
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
  headingIcon?: string;
  trailingIcon?: string;
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
  headingIcon,
  trailingIcon,
}: BoxType) => {
  const exampleTheme = useTheme();
  // El hook resuelve esto useThemedStyles
  // const getTheme = useTheme();
  // const containerStyle = buttonContainerStyle(getTheme, disabled);
  const containerStyle = useThemedStyles({
    styleFunction: buttonContainerStyle,
    disabled,
    size,
    aligment: stretch ? 'stretch' : '',
  });
  const textStyle = useThemedStyles({
    styleFunction: buttonTextStyle,
    disabled,
  });

  console.log(
    `\x1b[42mcontainerStyle, theme ${exampleTheme}\x1b[0m`,
    containerStyle
  );
  console.log(`\x1b[45mtextStyle, theme ${exampleTheme}\x1b[0m`, textStyle);

  const returnIconComponent = (icon: string) => (
    <Text style={textStyle[variant]}>{icon}</Text>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={styles} // el espaciado podría ser una prop más, que solo permita margin
    >
      <View style={containerStyle[variant]}>
        {headingIcon && returnIconComponent(headingIcon)}
        {/* arreglé error de children agregando types/react en resolutions
        https://stackoverflow.com/questions/71916289/react-native-component-cannot-be-used-as-a-jsx-component-type-is-not-as */}
        <Text style={textStyle[variant]}>{children}</Text>
        {trailingIcon && returnIconComponent(trailingIcon)}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
