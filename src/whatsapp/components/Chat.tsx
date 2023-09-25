import React from 'react';
import {View, StyleSheet, } from 'react-native';

import Statusbar from './Statusbar';
import HeaderChat from './HeaderChat';
import { MessagesList } from './MessagesList';

const Chat = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
      <Statusbar />
      <HeaderChat />
      <MessagesList />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
    marginLeft: 15,
    fontWeight: '500',
    paddingLeft: 0,
    paddingTop: 5,
    height: 40,
  },
  row: {
    flexDirection: 'row',
  },
  topBit: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    //   paddingTop:10,
    backgroundColor: '#008069',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  tabBarLabelStyle: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

const WHATSAPP_GREENS = ['#008069', '#075E54', '#25D366'] as const;

export default Chat;
