import { Button, ThemeProvider } from 'mutache-styler';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState('pink');
  return (
    <SafeAreaView>
      <Pressable onPress={() => setTheme('pink')}>
        <Text>Set Pink</Text>
      </Pressable>
      <Pressable onPress={() => setTheme('base')}>
        <Text>Set base</Text>
      </Pressable>
      <ThemeProvider theme={theme}>
        <View>
          <Text>EEEEEEEE</Text>
        </View>
        <Button variant="primary">AAAAAAA</Button>
        <Button variant="secondary">AAAAAAA</Button>
        <Button variant="link">AAAAAAA</Button>
        <Button variant="flat">AAAAAAA</Button>
        <Button size="small" variant="primary">
          AAAAAAA
        </Button>
        <Button size="small" variant="secondary">
          AAAAAAA
        </Button>
        <Button size="small" variant="link">
          AAAAAAA
        </Button>
        <Button size="small" variant="flat">
          AAAAAAA
        </Button>
      </ThemeProvider>
    </SafeAreaView>
  );
}
