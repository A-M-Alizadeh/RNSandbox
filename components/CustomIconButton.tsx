import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  onpress: () => void;
  icon: string;
  size?: number;
  color?: string;
  style?: React.ComponentProps<typeof TouchableOpacity>;
  badgeValue?: number;
} & typeof defaultProps;

type BadgeProps = {
  badgeValue: number;
};

const CustomIconButton = ({
  onPress,
  icon,
  size,
  color,
  style,
  badgeValue,
}: Props) => {
  const BadgeView = ({ badgeValue }: BadgeProps) => {
    return (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badgeValue}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...style }}
      activeOpacity={0.6}>
      <Icon name={icon} size={size} color={color} />
      {badgeValue ? <BadgeView badgeValue={badgeValue} /> : null}
    </TouchableOpacity>
  );
};

export default CustomIconButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  icon: {},
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

const defaultProps = {
  size: 20,
  color: 'black',
  style: {},
  onPress: () => { },
  badgeValue: 0,
  leftIconStyle: {},
  rightIconStyle: {},
};

CustomIconButton.defaultProps = defaultProps;
