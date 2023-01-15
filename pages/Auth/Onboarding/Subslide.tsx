import { View, Text, StyleSheet, Animated, ViewStyle } from 'react-native';
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { Button } from '../../../components';
import { FadeIn } from 'react-native-reanimated';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const onPressing = (onPress: () => void) => {
    fadeIn();
    onPress();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Animated.View
        style={{
          backgroundColor: 'red',
          width: 60,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          opacity: fadeAnim,
        }}>
        <Text>Hello</Text>
      </Animated.View>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={() => onPressing(onPress)}
      />
    </View>
  );
};

export default Subslide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#0c0d34',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#0c0d34',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2cb9b0',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
