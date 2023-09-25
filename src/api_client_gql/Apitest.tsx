import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {useQuery} from '@apollo/client';

import {USERS_QUERY, MESSAGES_QUERY, CHATS_QUERY} from './query_gql';

function Apitest() {
  const {data, loading, error} = useQuery(USERS_QUERY);

  if (loading) {
    console.log(`loading ${loading}`);
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log(`error ${error}`);
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

    // const users = JSON.stringify(data.users[1].user_name);   // TEST
    // console.log(`data ${users}`);
  return (
    <FlatList
      data={data.users}
      renderItem={({item}) => (
        <View>
          <Text>User name : {item.user_name}</Text>
          <Text>User id : {item.user_id}</Text>
          <Text>mobile : {item.mobile}</Text>
          <Text>email : {item.email}</Text>
          <Text>__________</Text>
        </View>
      )}
    />
  );
}

export default Apitest;
