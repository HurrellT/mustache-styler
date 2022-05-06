import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import useThemedStyles from '../styles/layout/useThemedStyles';
import themes from '../styles/theme/themes';

type ContentType = {
  children: ReactNode;
};

const Content = ({ children }: ContentType) => {
  const styles = useThemedStyles(style);

  return <Text style={styles.text}>{children}</Text>;
};

export default Content;

const style = (theme: any) =>
  StyleSheet.create({
    text: { color: themes[theme].content },
  });
