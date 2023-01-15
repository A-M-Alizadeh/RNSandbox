import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomButton } from '../../components';

type Props = {};

const Landing = (props: Props) => {
  return (
    <ImageBackground source={require('../../assets/images/landing.jpg')} style={styles.bg}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <CustomButton title='Login' btnStyle={styles.btn} />
          <CustomButton
            title= 'Sign Up'
            round
            outline
            backgroundColor= 'white'
            btnStyle={styles.btn}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Landing;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bg: {
    flex: 1,
    opacity: 0.9,
  },
  container: {
    width: '90%',
  },
  btn: {
    marginVertical: 5,
  },
});
