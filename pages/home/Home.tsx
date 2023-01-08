import { View, Text, StyleSheet, SafeAreaView, FlatList, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeSkeleton from './HomeSkeleton';
import PostItem from './PostItem';

interface IPostItem {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Home = (): JSX.Element => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(-1);
  const [posts, setPosts] = useState<IPostItem[]>([]);
  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  const _onPress = (id: number) => {
    navigation.navigate('Post', {postId: id});
  };
  const _onLongPress = (id: number) => {
    setSelectedId(id);
  };

  let translateY = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: [0, -180],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedFlatlist
        contentContainerStyle={styles.flatList}
        data={posts}
        renderItem={item => <PostItem {...item} onPress={_onPress} />}
        scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedValue}}}],
          {useNativeDriver: true}, // <-- Add this
        )}
        keyExtractor={item => item.id.toString()}
        extraData={selectedId}
        ListEmptyComponent={() => <HomeSkeleton />}
      />
      <Animated.View style={[styles.headerWrapper, {transform: [{translateY}]}]}>
        <Text style={styles.header}>News Feed</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flatList: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginTop: 200,
  },
  headerWrapper: {
    position: 'absolute',
    height: 200,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 40,
  },
});
