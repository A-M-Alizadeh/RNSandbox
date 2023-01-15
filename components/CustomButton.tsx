import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  onPress?: () => void;
  title: string;
  round?: boolean;
  icon?: string;
  backgroundColor?: string;
  color?: string;
  btnStyle?: ViewStyle;
  titleStyle?: ViewStyle;
  outline?: boolean;
  disabled?: boolean;
  loading?: boolean;
} & typeof defaultProps &
  React.ComponentProps<typeof TouchableOpacity>;

const CustomButton = ({
  onPress,
  title,
  color,
  backgroundColor,
  icon,
  btnStyle,
  titleStyle,
  round,
  outline,
  loading,
  ...rest
}: Props) => {
  backgroundColor = rest.disabled ? 'gray' : backgroundColor;
  color = outline ? backgroundColor : color;
  onPress = rest.disabled || loading ? () => {} : onPress;

  const ButtonDetails = () => {
    return (
      <View style={{ ...styles({}).detailContainer }}>
        {icon && <Icon name={icon} color={color} style={styles({}).icon} />}
        <Text style={{ ...styles({}).title, ...titleStyle, color }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles({ round, outline, backgroundColor }).container,
        ...btnStyle,
      }}
      activeOpacity={0.7}
      {...rest}>
      {loading ? <Text>Loading ...</Text> : <ButtonDetails />}
    </TouchableOpacity>
  );
};

export default CustomButton;

type StyleProps = {
  round?: boolean;
  outline?: boolean;
  backgroundColor?: string;
};

const styles = ({ round, outline, backgroundColor }: StyleProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: outline ? 'transparent' : backgroundColor,
      borderColor: outline ? backgroundColor : 'transparent',
      borderWidth: outline ? 1 : 0,
      height: 40,
      width: '100%',
      borderRadius: round ? 50 : 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    title: {
      color: outline ? backgroundColor : 'white',
      fontSize: 14,
      fontWeight: 'bold',
    },
    icon: {
      // width: 18,
      // height: 18,
      fontSize: 14,
      marginHorizontal: 10,
      color: 'white',
    },
    detailContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const defaultProps = {
  onPress: () => {},
  title: 'Button',
  icon: '',
  backgroundColor: 'black',
  color: 'white',
  round: true,
  outline: false,
  // disabled: false,
  loading: false,
};

CustomButton.defaultProps = defaultProps;
