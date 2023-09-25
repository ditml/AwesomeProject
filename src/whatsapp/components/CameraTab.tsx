import React from 'react';
import {View, Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

export function CallsTab() {
  return (
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{color: 'black', backgroundColor: 'yellow'}} >CallsTab</Text>
      <Icon name="chat" color="#fff" size={23} style={{padding: 5}} />
    </View>
  );
}
