import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, NavButton, SearchBar, Header, CustomIconButton } from '../components';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};

const Test = (props: Props) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Header
        leftIcon='chain'
        onpressLeftIcon={() => { }}
        rightIcon='cloud'
        onpressRightIcon={() => { }}
        badgeValue={1}
      />
      <SearchBar
        placeHolder='search'
        value={value}
        onChangeText={value => setValue(value)}
        onClearText={() => setValue('')}
      />
      <CustomButton onPress={() => alert('oh')} icon={'forward'} />
      {/* <Icon name="arrow-right" size={30} color="#900" /> */}
      <NavButton onPress={() => alert('oh')} type={'back'} size={'small'} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
