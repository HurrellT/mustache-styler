import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useComponentTheme } from '../../../src/contexts/Theme';
import { Components } from '../styles/allComponentStyles';

export type ButtonType = {
  activeOpacity?: number;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  stretch?: boolean;
  title: string;
  onPress: (e: any) => void;
  variant: 'primary' | 'secondary';
  styles?: string;
};

const Button = ({
  activeOpacity = 0.8,
  disabled = false,
  size = 'medium',
  stretch = false,
  title,
  onPress,
  variant = 'primary',
}: ButtonType) => {
  const { container: containerStyle, text: textStyle } = useComponentTheme(
    Components.Button
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
    >
      <View
        style={[
          containerStyle.common,
          containerStyle[size],
          containerStyle[variant],
          disabled ? containerStyle[`${variant}Disabled`] : null,
          stretch ? containerStyle.stretch : null,
        ]}
      >
        {title && (
          <Text
            style={[
              textStyle[variant],
              textStyle[size],
              disabled ? textStyle[`${variant}Disabled`] : null,
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
