/* eslint-disable react-native/no-inline-styles */
import { Button, colors, ThemeProvider } from 'mutache-styler';
import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const exampleStyles = StyleSheet.create({
  container: { marginVertical: 5 },
  pressable: {
    backgroundColor: colors.green100,
    padding: 5,
    margin: 3,
    borderRadius: 4,
  },
  pressableText: {
    textAlign: 'center',
    color: colors.black100,
  },
});

export default function App() {
  const [theme, setTheme] = useState('pink');
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          onPress={() => setTheme('pink')}
          style={exampleStyles.pressable}
        >
          <Text style={exampleStyles.pressableText}>Set PINK</Text>
        </Pressable>
        <Pressable
          onPress={() => setTheme('base')}
          style={exampleStyles.pressable}
        >
          <Text style={exampleStyles.pressableText}>Set BASE</Text>
        </Pressable>

        <ThemeProvider theme={theme}>
          <View style={{ padding: 20 }}>
            <Button
              onPress={() => {}}
              variant="primary"
              styles={exampleStyles.container}
              trailingIcon="x"
              headingIcon="x"
            >
              Primary
            </Button>
            <Button
              onPress={() => {}}
              variant="primary"
              styles={exampleStyles.container}
              headingIcon="x"
            >
              Primary
            </Button>
            <Button
              onPress={() => {}}
              variant="secondary"
              styles={exampleStyles.container}
              trailingIcon="x"
              stretch
            >
              Secondary
            </Button>
            <Button
              onPress={() => {}}
              variant="link"
              styles={exampleStyles.container}
            >
              Link
            </Button>
            <Button
              onPress={() => {}}
              variant="flat"
              styles={exampleStyles.container}
            >
              Flat
            </Button>

            <Button
              onPress={() => {}}
              disabled
              variant="primary"
              styles={exampleStyles.container}
            >
              Primary
            </Button>
            <Button
              onPress={() => {}}
              disabled
              variant="secondary"
              styles={exampleStyles.container}
            >
              Secondary
            </Button>
            <Button
              onPress={() => {}}
              disabled
              variant="link"
              styles={exampleStyles.container}
            >
              Link
            </Button>
            <Button
              onPress={() => {}}
              disabled
              variant="flat"
              styles={exampleStyles.container}
            >
              Flat
            </Button>

            <Button
              onPress={() => {}}
              size="small"
              variant="primary"
              styles={exampleStyles.container}
            >
              Primary
            </Button>
            <Button
              onPress={() => {}}
              size="small"
              variant="secondary"
              styles={exampleStyles.container}
            >
              Secondary
            </Button>
            <Button
              onPress={() => {}}
              size="small"
              variant="link"
              styles={exampleStyles.container}
            >
              Link
            </Button>
            <Button
              onPress={() => {}}
              size="small"
              variant="flat"
              styles={exampleStyles.container}
            >
              Flat
            </Button>

            <Button
              onPress={() => {}}
              size="small"
              disabled
              variant="primary"
              styles={exampleStyles.container}
            >
              Primary
            </Button>
            <Button
              onPress={() => {}}
              size="small"
              disabled
              variant="secondary"
              styles={exampleStyles.container}
            >
              Secondary
            </Button>
            <Button
              onPress={() => {}}
              size="small"
              disabled
              variant="link"
              styles={exampleStyles.container}
            >
              Link
            </Button>
            <Button
              onPress={() => {}}
              size="small"
              disabled
              variant="flat"
              styles={exampleStyles.container}
            >
              Flat
            </Button>
          </View>
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}
