import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface ButtonProps {
  label: string;
  variant: 'default' | 'primary';
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? '#2cb9b0' : 'rgba(12, 13, 52, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0c0d34';
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} {...{ onPress }}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = { variant: 'default' };

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 245,
    height: 50,
  },
  label: {
    fontSize: 15,
    lineHeight: 30,
    textAlign: 'center',
  },
});
