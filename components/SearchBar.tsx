import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type SearchBarProps = {
  placeHolder?: string;
  onChangeText: (value: string) => void;
  value: string;
  containerStyle?: React.ComponentProps<typeof View>;
  onClearText?: () => void;
} & typeof DefaultSearchBarProps;

const SearchBar = ({
  placeHolder,
  onChangeText,
  onClearText,
  value,
  containerStyle,
  ...rest
}: SearchBarProps) => {
  let icon = value !== '' ? 'close' : 'search';
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TouchableOpacity onPress={onClearText}>
        <Icon
          activeOpacity={0.9}
          backgroundColor='transparent'
          name={icon}
          size={16}
          color="gray"
          undderlayColor="transparent"
          style={styles.Icon}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.text}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={1}
        {...rest}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '95%',
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  Icon: {
    marginHorizontal: 10,
    color: 'gray',
    backgroundColor: 'transparent',
  },
  text: {},
});

const DefaultSearchBarProps = {
  placeHolder: 'Search',
  onChangeText: () => {},
  onClearText: () => {},
  value: '',
};

SearchBar.defaultProps = DefaultSearchBarProps;
