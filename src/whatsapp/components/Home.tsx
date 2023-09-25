import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';

import {ChatsTab} from './ChatsTab';
import {CallsTab} from './CameraTab';
import {StatusTab} from './StatusTab';
import {GroupTab} from './GroupTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import Statusbar from './Statusbar';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TAB_BAR_WIDTH = (90 * SCREEN_WIDTH) / 100; //90% of screen
const TAB_AND_INDICATOR_WIDTH = TAB_BAR_WIDTH / 3;
const CAMERA_WIDTH = (10 * SCREEN_WIDTH) / 100; //10% of screen

const Tab = createMaterialTopTabNavigator();

const WHATSAPP_GREENS = ['#008069', '#075E54', '#25D366', '#e7ffdb'] as const;

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;
const HIDDEN = [true, false] as const;

export default function Home() {
  return (
    <View style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
      <Statusbar />
      {/* <StatusBar
        animated={true}
        backgroundColor={WHATSAPP_GREENS[0]}
        barStyle={STYLES[0]}
        showHideTransition={TRANSITIONS[0]}
        hidden={HIDDEN[1]}
      /> */}
      <View style={styles.topBit}>
        <Text style={styles.header}>WhatsApp</Text>
        <View style={styles.row}>
          {/* <Text style={{fontWeight: '200', padding: 5}}><IconMatCom name="camera-outline" color="#fff" size={20} style={{padding: 5}} /></Text> */}
          <IconMatCom
            name="camera-outline"
            color="#fff"
            size={30}
            style={{
              padding: 5,
              paddingRight: 30,
              paddingLeft: 0,
              alignContent: 'center',
              alignItems: 'center',
            }}
          />
          <Icon
            name="search"
            color="#fff"
            size={30}
            style={{padding: 5, paddingRight: 30, paddingLeft: 0}}
          />
          <Icon
            name="more-vert"
            color="#fff"
            size={30}
            style={{padding: 5, paddingRight: 10, paddingLeft: 0}}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          backgroundColor: 'black',
        }}>
        <NavigationContainer>
          <Tab.Navigator
            id="HomeID"
            screenOptions={{
              tabBarStyle: {
                backgroundColor: WHATSAPP_GREENS[0],
                // width: '100%',
                // display: 'flex',
                // flexDirection: 'row',
              },

              tabBarLabelStyle: styles.tabBarLabelStyle,
              //  {
              // fontSize: 10,
              // color: 'white',
              // fontWeight: 'bold',
              // flexDirection: 'row',
              // height: 14,
              // width: 100,
              // width: SCREEN_WIDTH - 100,
              // },

              tabBarIndicatorStyle: {backgroundColor: 'white'},

              // tabBarScrollEnabled: true,
              // tabBarItemStyle: {width: 100, minWidth: 50, maxWidth: 100},
              // tabBarContentContainerStyle: {width: 60},
            }}>
            <Tab.Screen
              name="Chats"
              component={ChatsTab}
              options={{
                tabBarLabel: 'Chats',
                tabBarShowLabel: true,
                tabBarShowIcon: false,
                // tabBarLabelStyle: styles.tabBarLabelStyle,
              }}
            />

            <Tab.Screen
              name="Group"
              component={GroupTab}
              options={{
                tabBarIcon: ({color, focused}) => (
                  <Icon
                    name="groups"
                    color={'white'}
                    size={22}
                    style={{
                      padding: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 1,
                    }}
                  />
                ),
                tabBarIconStyle: {maxWidth: 50},

                tabBarShowLabel: false,
              }}
            />

            <Tab.Screen
              name="Updates"
              component={StatusTab}
              options={
                {
                  // tabBarLabelStyle: styles.tabBarLabelStyle,
                }
              }
            />
            <Tab.Screen
              name="Calls"
              component={CallsTab}
              options={
                {
                  // tabBarLabelStyle: styles.tabBarLabelStyle,
                }
              }
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

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
