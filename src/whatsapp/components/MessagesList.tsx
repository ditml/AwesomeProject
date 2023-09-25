import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SentMessageBar from './SentMessageBar';
import RecievedMessageBar from './RecievedMessageBar';

export const MessagesList = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'column',
        // flexGrow: 1,
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: '#FFF',
          display: 'flex',
          flexDirection: 'row',
          // flexGrow: 1,
          // width: '100%',
          justifyContent: 'flex-end',
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 15,
          paddingLeft: 10,
        }}>
        <SentMessageBar />
      </View>
      <View
        style={{
          backgroundColor: 'lightgrey',
          display: 'flex',
          flexDirection: 'row',
          // flexGrow: 1,
          // width: '100%',
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          alignItems: 'flex-start',
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 15,
          paddingLeft: 10,
        }}>
        <RecievedMessageBar />
      </View>
    </ScrollView>
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
