import { View, Text, TouchableOpacity , StyleSheet, ListRenderItem} from 'react-native';
import React from 'react';

interface IPost {
  id: number;
  title: string;
  body: string;
  onPress: (id: number) => void;
}

const PostItem: ListRenderItem<IPost> = ({item, onPress}: {item: IPost}) => {
  return (
    <TouchableOpacity
      style={styles.postItem}
      onPress={() => onPress(item.id)}
      onLongPress={() => console.log('Long')}>
      <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.itemBody} numberOfLines={3}>{item.body}</Text>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  postItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 150,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 5,
  },
  itemBody: {
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
  },
});
