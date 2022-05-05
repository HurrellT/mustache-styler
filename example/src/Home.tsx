import { useTheme } from 'mutache-styler';
import React from 'react';
import { Button, SafeAreaView, Switch, Text } from 'react-native';

const Home = () => {
  const { isDark, toggleTheme, currentTheme } = useTheme();

  console.log(currentTheme);

  return (
    <SafeAreaView>
      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        // how to fix this typing thing?
        color={currentTheme.primary.color}
      />
      <Switch onValueChange={toggleTheme} value={isDark} />
      <Text>isDark: {isDark ? 'Yeah' : 'Nah'}</Text>
      <Text>Current theme: {currentTheme && JSON.stringify(currentTheme)}</Text>
    </SafeAreaView>
  );
};

export default Home;
