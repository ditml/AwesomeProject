import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export default function Nettest() {
  const [post, setPost] = useState('hi');

  useEffect(() => {
    // async function fetchPosts() {
    //   try {
    //     const response = await fetch(
    //       'https://jsonplaceholder.typicode.com/posts',
    //     );

    //     const postssss = await response.json();
    //     console.log(postssss);
    //     setPost(postssss.body);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
      const post = res.json();
      //   setPost(post);
      console.log(post);
    });
  }, []);

  return (
    <View>
      <Text>{post}</Text>
    </View>
  );
}
