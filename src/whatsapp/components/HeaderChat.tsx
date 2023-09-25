import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';


const HeaderChat = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        //   paddingTop:10,
        backgroundColor: '#008069',
        justifyContent: 'space-between',
      }}>
      <View style={styles.row}>
        <IconMatCom
          name="arrow-left"
          color="#fff"
          size={30}
          style={{padding: 0, paddingRight: 0, paddingLeft: 10}}
        />
      </View>
      <View style={{backgroundColor: 'blue', flexGrow: 1}}>
        <HeaderChatProfileCard />
      </View>
      {/* <HeaderChat /> */}
      <View style={styles.row}>
        {/* <Text style={{fontWeight: '200', padding: 5}}><IconMatCom name="camera-outline" color="#fff" size={20} style={{padding: 5}} /></Text> */}
        <IconIonic
          name="videocam"
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
          name="call"
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
  );
};

export const HeaderChatProfileCard = ({
  img = require('../../assets/img/cheerful-curly-business-girl-wearing-glasses_176420-206.png'),
  name = 'Goldy',
  msg = 'tap here for group info',
  time = '14/09/23',
  ticks = 3,
  selected = true,
  counts = 16,
  state = 3,
}) => {
  let profileIconImg: any;

  if (img != '' || img != null) {
    profileIconImg = (
      <Image
        source={img}
        style={{
          height: 52,
          width: 52,
          borderRadius: 52,
          position: 'absolute',
          zIndex: 200,
        }}
      />
    );
  }

  return (
    /* <Text>Sample Chat Card</Text> */
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start',
        backgroundColor: 'pink',
        alignItems: 'flex-start',
        flexDirection: 'column',
        alignSelf: 'flex-start',
      }}>
      <View
        style={{
          backgroundColor: WHATSAPP_GREENS[0],
          // backgroundColor: 'yellow',
          display: 'flex',
          // flexWrap: 'wrap',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignSelf: 'flex-start',
          // width: 360,
          // width: '100%',
          height: 85,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          // borderWidth: 1,
          // borderBottomWidth: 1,
          // borderColor: 'grey',
          // borderColor: 'lightgrey',
        }}>
        {/* <Text>Left Profile Pic layout</Text> */}
        <View
          style={{
            width: 52,
            height: 52,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: 'white',

            marginLeft: 10,
            marginRight: 5,
          }}>
          {/* <Text>Profile Pic Icon</Text> */}
          <View
            style={{
              borderRadius: 52,
              borderColor: 'grey',
              borderWidth: 1,
              width: 52,
              height: 52,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}>
            <Icon
              name="face"
              style={{
                fontSize: 48,
                color: 'blue',
                position: 'absolute',
                zIndex: 100,
              }}
            />
            {profileIconImg}
          </View>
        </View>

        {/* <Text>ChatInfoLayout</Text> */}
        <View
          style={{
            display: 'flex',
            // width: 'auto',
            height: 'auto',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexGrow: 1,
            // backgroundColor: 'white',
            // backgroundColor: 'lightgreen',
            marginLeft: 5,
            marginRight: 5,
          }}>
          {/* <Text>Top Text layout</Text> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                maxWidth: '100%',
              }}>
              <View
                style={{
                  alignSelf: 'flex-start',
                  flexGrow: 1,
                  // backgroundColor: 'white',
                  // backgroundColor: 'pink',
                }}>
                {/* <Text>Upper Left Title Text</Text> */}
                <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
                  {name}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'flex-end',
                  flexWrap: 'wrap',
                  // backgroundColor: 'white',
                  marginLeft: 5,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  alignContent: 'flex-start',
                  display: 'flex',
                  flexDirection: 'column',
                }}></View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              {/* <Text>Bottom Text layout</Text> */}

              <View
                style={{
                  alignSelf: 'stretch',
                  flexGrow: 1,
                  // backgroundColor: 'white',
                  // backgroundColor: 'brown',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Text>Bottom Mid Last Message Text </Text> */}
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 14,
                    fontWeight: '600',
                    // color: '#0000007a',
                    color: 'white',
                  }}>
                  {msg}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'flex-end',
                  flexWrap: 'wrap',
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  // backgroundColor: 'pink',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Text>Bottom Right State Icon </Text> */}
              </View>
              <View
                style={{
                  alignSelf: 'flex-end',
                  flexWrap: 'wrap',
                  backgroundColor: 'white',
                  // backgroundColor: 'pink',
                  justifyContent: 'center',
                  alignContent: 'center',
                  // alignItems: 'center',
                }}>
                {/* <Text>Bottom Right Count Icon </Text> */}
              </View>
            </View>
          </View>
        </View>
      </View>
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

export default HeaderChat;

