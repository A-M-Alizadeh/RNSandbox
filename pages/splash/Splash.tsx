import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const Splash = (props: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Landing');
    }, 100);
  }, []);

  return ( <ImageBackground source={require('../../assets/images/splash.jpg')} style={styles.container} /> );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
