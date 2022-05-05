import { useTheme } from 'mutache-styler';
import React from 'react';
import { Button, SafeAreaView, Switch, Text } from 'react-native';

const Home = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <Switch onValueChange={toggleTheme} value={isDark} />
      <Text>isDark: {isDark ? 'Yeah' : 'Nah'}</Text>
    </SafeAreaView>
  );
};

export default Home;
