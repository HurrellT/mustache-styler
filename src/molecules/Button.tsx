import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
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
};

const Button = ({ children, variant, size, disabled }: BoxType) => {
  const containerStyle = useThemedStyles(buttonContainerStyle);
  const textStyle = useThemedStyles(buttonTextStyle);
  const containerSize =
    size === 'small' ? { paddingVertical: spacing.micro_xxs } : {};
  return (
    <View
      style={[
        disabled ? containerStyle[variant].disabled : containerStyle[variant], // agregar estilo disabled
        containerSize,
      ]}
    >
      <Text style={textStyle[variant]}>{children}</Text>
    </View>
  );
};

export default Button;
