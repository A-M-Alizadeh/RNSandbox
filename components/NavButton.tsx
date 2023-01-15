import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

type NavButtonProps = {
  onPress: () => void;
  type: 'forward' | 'back';
  size?: 'small' | 'large';
} & typeof defaultProps;

const NavButton = ({ type, size, onPress }: NavButtonProps) => {
  const tempStyles = {
    width: size === 'small' ? 28 : 40,
    height: size === 'small' ? 28 : 40,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, tempStyles]}>
      <Icon
        name={ type === 'forward' ?"arrow-right" : 'arrow-left'}
        size={size === 'small' ? 16 : 24}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 10,
  },
});

const defaultProps = {
  size: 'small',
  type: 'forward',
  onPress: () => {},
};
NavButton.defaultProps = defaultProps;
