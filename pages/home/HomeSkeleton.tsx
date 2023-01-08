import { View, StyleSheet } from 'react-native';
import React from 'react';
import ContentLoader from 'react-content-loader/native';

const HomeSkeleton = () => {
  const MyLoader = () => <ContentLoader />;

  return (
    <View style={styles.container}>
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
    </View>
  );
};

export default HomeSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
