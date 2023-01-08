import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const Splash = (props: Props) => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
