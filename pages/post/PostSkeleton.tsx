import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Facebook } from 'react-content-loader/native'

const PostSkeleton = () => {
  const MyFacebookLoader = () => <Facebook />;
  return (
    <View style={styles.container}>
      <MyFacebookLoader />
    </View>
  );
};

export default PostSkeleton;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
