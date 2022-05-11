import { Button, ThemeProvider } from 'mutache-styler';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [variant, setVariant] = useState<'primary' | 'secondary'>('primary');
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [theme, setTheme] = useState<'trading' | 'cripto'>('trading');

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Button
          title="Button"
          onPress={() => console.log('press')}
          variant={variant}
          size={size}
        />
        <View style={{ marginTop: 16 }}>
          <Text>Variant: </Text>
          <View style={styles.containerOptions}>
            <TouchableOpacity onPress={() => setVariant('primary')}>
              <Text>Primary</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVariant('secondary')}>
              <Text>Secondary</Text>
            </TouchableOpacity>
          </View>
          <Text>Sizing: </Text>
          <View style={styles.containerOptions}>
            <TouchableOpacity onPress={() => setSize('small')}>
              <Text>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSize('medium')}>
              <Text>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSize('large')}>
              <Text>Large</Text>
            </TouchableOpacity>
          </View>
          <Text>Theme: </Text>
          <View style={styles.containerOptions}>
            <TouchableOpacity onPress={() => setTheme('trading')}>
              <Text>Trading</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTheme('cripto')}>
              <Text>Cripto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
