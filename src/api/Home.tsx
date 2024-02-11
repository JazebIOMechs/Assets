import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  useGetPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useNewPostMutation,
} from './api';
import {postType} from './interface';

const Home = () => {
  console.log('rerender');
  const {data, isError, isLoading, error} = useGetPostsQuery('posts');
  const [new_post] = useNewPostMutation();
  const [delete_post] = useDeletePostMutation();
  const [update_post] = useUpdatePostMutation();
  //   console.log(isLoading);
  //   console.log(isError);
  //   console.log(data);

  function addPost(data: postType) {
    new_post(data);
  }
  function updatePost(data: unknown) {
    update_post(data);
  }
  function deletePost(id: string) {
    delete_post({id});
  }

  let allPosts = data?.map(post => {
    return <Text>{post.id}</Text>;
  });
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',

        gap: 50,
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          height: 200,
          //   flexDirection: 'row',
        }}>
        {allPosts}
      </View>

      {/* Show */}
      <TouchableOpacity
        onPress={() => {
          console.log('pressed : SHOW ALL POSTS');
          console.log(data);
          //   addPost({id: '34', name: 'Jazeb', weight: 34});
        }}>
        <Text style={{fontSize: 45, backgroundColor: 'pink'}}>
          SHOW ALL POSTS
        </Text>
      </TouchableOpacity>

      {/* ADD POST */}
      <TouchableOpacity
        onPress={() => {
          console.log('pressed : ADD POST');
          addPost({id: '34', name: 'Jazeb', height: 34});
        }}>
        <Text style={{fontSize: 45, backgroundColor: 'pink'}}> ADD POST</Text>
      </TouchableOpacity>

      {/* Update */}
      <TouchableOpacity
        onPress={() => {
          console.log('pressed : UPDATEPOSt');
          updatePost({
            id: '13',
            name: 'A',
          });
        }}>
        <Text style={{fontSize: 45, backgroundColor: 'pink'}}>UPDATE POST</Text>
      </TouchableOpacity>

      {/* Delete */}
      <TouchableOpacity
        onPress={() => {
          console.log('pressed : DELETEPOSt');
          deletePost('16');
          //   addPost({id: '34', name: 'Jazeb', weight: 34});
        }}>
        <Text style={{fontSize: 45, backgroundColor: 'pink'}}>DELETE POST</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
