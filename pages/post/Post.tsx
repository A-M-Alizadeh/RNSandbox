import {View, Text, StyleSheet} from 'react-native';
import React,{useEffect, useState} from 'react';
import PostSkeleton from './PostSkeleton';


interface IPost {
  title: string;
  body: string;
  userId: number;
  id: number;
}

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Post = ({route}) => {
  const postId = route.params.postId;
  const [post, setPost] = useState<IPost>();
  const [comments, setComments] = useState<IComment[]>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(json => setPost(json));

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(json => setComments(json));
  }, []);

  if (post && comments) {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{post?.title}</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.innerContainer}>
          <Text style={styles.body}>{post?.body}</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.innerContainer}>
          <Text style={styles.username}>Username</Text>
        </View>
      </View>
    );
  } else {
    return <PostSkeleton />;
  }
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 4,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  seperator: {
    height: 1,
    backgroundColor: 'lightgray',
    width: '90%',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  body: {
    fontSize: 16,
    color: 'gray',
  },
  username: {
    fontSize: 12,
    color: 'lightgray',
  },
});
