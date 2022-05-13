import { useTheme } from 'mutache-styler';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import { Sizes, SizesType } from '../designSystem/Sizing';
import { Themes } from '../designSystem/themes/allThemes';
import { Variants, VariantsType } from '../designSystem/Variants';

const Home = () => {
  const [variant, setVariant] = useState<VariantsType>(Variants.primary);
  const [size, setSize] = useState<SizesType>(Sizes.medium);
  const { setCurrentTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Button
        title="Button"
        onPress={() => console.log('press')}
        variant={variant}
        size={size}
      />
      <View style={{ marginTop: 16 }}>
        <Text>Variant: {variant}</Text>
        <View style={styles.containerOptions}>
          <TouchableOpacity onPress={() => setVariant(Variants.primary)}>
            <Text>Primary</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVariant(Variants.secondary)}>
            <Text>Secondary</Text>
          </TouchableOpacity>
        </View>
        <Text>Sizing: </Text>
        <View style={styles.containerOptions}>
          <TouchableOpacity onPress={() => setSize(Sizes.small)}>
            <Text>Small</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSize(Sizes.medium)}>
            <Text>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSize(Sizes.large)}>
            <Text>Large</Text>
          </TouchableOpacity>
        </View>
        <Text>Theme: </Text>
        <View style={styles.containerOptions}>
          <TouchableOpacity onPress={() => setCurrentTheme(Themes.base)}>
            <Text>Trading</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTheme(Themes.cripto)}>
            <Text>Cripto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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

export default Home;
