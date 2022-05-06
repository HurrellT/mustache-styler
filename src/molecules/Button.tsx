import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useThemedStyles from '../styles/layout/useThemedStyles';
import buttonContainerStyle, {
  buttonTextStyle,
} from '../styles/molecules/Button';
import type { BoxType } from '../types/molecules/Button';

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
        <Text style={textStyle[variant]}>{children}</Text>
        {trailingIcon && returnIconComponent(trailingIcon)}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
