import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { CustomIconButton, NavButton } from './index';

type HeaderProps = {
  leftIcon: 'back' | string;
  rightIcon?: string;
  onpressLeftIcon: () => void;
  onpressRightIcon?: () => void;
  badgeValue: number;
  rightIconStyle: ViewStyle;
  leftIconStyle: ViewStyle;
};

const Header = ({
  leftIcon,
  rightIcon,
  onpressLeftIcon,
  onpressRightIcon,
  badgeValue,
  rightIconStyle,
  leftIconStyle,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {leftIcon === 'back' ? (
        <NavButton onPress={onpressLeftIcon} type={'back'} size={'small'} />
      ) : (
        <CustomIconButton
          icon={leftIcon}
          onpress={onpressLeftIcon}
          style={leftIconStyle}
        />
      )}
      {rightIcon ? <CustomIconButton icon={rightIcon} onpress={onpressRightIcon}  badgeValue={badgeValue} style={rightIconStyle} /> : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

const defaultProps = {
  size: 20,
  color: 'black',
  leftIcon: 'back',
  rightIcon: '',
  badgeValue: 0,
};
