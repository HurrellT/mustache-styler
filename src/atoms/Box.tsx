import React, { ReactNode } from 'react';
import { View } from 'react-native';
import useThemedStyles from '../styles/layout/useThemedStyles';
import buttonContainerStyle from '../styles/molecules/Button';

type BoxType = {
  children: ReactNode;
  variant: 'typeOne' | 'typeTwo' | 'typeThree';
};

const Box = ({ children, variant }: BoxType) => {
  const styles = useThemedStyles(buttonContainerStyle);
  return <View style={styles[variant]}>{children}</View>;
};

export default Box;
