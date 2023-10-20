import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {SvgXml} from 'react-native-svg';

import RefferenceMessage from './RefferenceMessage';

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

const TriangleLeft = () => {
  const xml = `<svg 
    viewBox="0 0 8 13"
    height="13"
    width="8"
    preserveAspectRatio="xMidYMid meet"
    class=""
    version="1.1"
    x="0px"
    y="0px"
    enable-background="new 0 0 8 13"
    xml:space="preserve">
    <path 
      opacity="0.13"
      fill="#0000" 
      d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path>
    <path 
      fill="currentColor"
      d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
  </svg>`;

  // return <SvgXml xml={xml} width="15" height="15" color="blue" />;

  return (
    <View // Left Triangle box
      style={{position: 'absolute', left: -3, top: 0, zIndex: -100}}>
      <SvgXml xml={xml} width="15" height="15" color="#fff" />
    </View>
  );
};

export const RecievedMessageBar_ = () => {
  return (
    <View
      style={{
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        width: '85%',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingRight: 10,
        paddingLeft: 8,
      }}>
      <View style={{position: 'absolute', left: -4, top: 0, zIndex: -1}}>
        <TriangleLeft />
      </View>

      <View // Layout
        style={{
          backgroundColor: 'white',
          // backgroundColor: '#c9ffad',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          // flexGrow: 1,
          // width: '100%',
          // paddingBottom: 5,
          // paddingTop: 5,
          paddingLeft: 12,
          paddingRight: 7,
          // height: 35,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          borderTopLeftRadius: 0,
        }}>
        <View // Total Box
          style={{
            backgroundColor: 'white',
            // backgroundColor: '#c9ffad',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            // flexGrow: 1,
            // width: '100%',
            // paddingBottom: 5,
            // paddingTop: 5,
            // paddingLeft: 12,
            // paddingRight: 7,
            // height: 35,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',

            borderRadius: 12,
            borderTopLeftRadius: 0,
          }}>
          <View // Title Box
            style={{
              backgroundColor: 'white',
              // backgroundColor: '#c9ffad',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              // flexGrow: 1,
              // width: '100%',
              // paddingBottom: 5,
              // paddingTop: 5,
              // paddingLeft: 12,
              // paddingRight: 7,
              // height: 80,
              width: '85%',

              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              borderTopLeftRadius: 0,
            }}>
            <View // Name
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'white',

                paddingRight: 8,
                // alignSelf: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  // fontWeight: 'bold',
                  // alignSelf: 'center',
                  color: 'red',
                  // padding: 2,
                  textAlignVertical: 'bottom',
                }}>
                ~ Sanjaya
              </Text>
            </View>
            <View // Number
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                flexGrow: 1,
                // height: '100%',
                // backgroundColor: 'pink',

                // justifyContent: 'flex-end',
                // alignContent: 'flex-end',
                // alignItems: 'flex-end',
                justifyContent: 'center',
                alignContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  // fontWeight: 'bold',
                  alignSelf: 'flex-end',
                  verticalAlign: 'bottom',
                  color: 'grey',
                  padding: 2,

                  textAlignVertical: 'bottom',
                }}>
                +91 77362 21444
              </Text>
            </View>
          </View>

          <View // Message Box
            style={{
              backgroundColor: 'white',
              // backgroundColor: '#c9ffad',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              // flexGrow: 1,
              // width: '100%',
              // paddingBottom: 5,
              // paddingTop: 5,
              // paddingLeft: 12,
              paddingRight: 7,
              height: 35,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              borderTopLeftRadius: 0,
            }}>
            <View // Message
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'white',

                paddingRight: 8,
                // alignSelf: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  // fontWeight: 'bold',
                  // alignSelf: 'center',
                  color: 'blue',
                  // padding: 2,
                  textAlignVertical: 'bottom',
                }}>
                @Varun Bhavani
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                flexGrow: 1,
                // height: '100%',
                // backgroundColor: 'pink',

                justifyContent: 'flex-end',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                // justifyContent: 'center',
                // alignContent: 'center',
                // alignItems: 'center',
              }}>
              <View // Time
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  flexGrow: 1,
                  // height: '100%',
                  // backgroundColor: 'pink',

                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                  alignItems: 'flex-end',
                  // justifyContent: 'center',
                  // alignContent: 'center',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    // fontWeight: 'bold',
                    alignContent: 'flex-end',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                    verticalAlign: 'bottom',
                    color: 'grey',
                    padding: 2,

                    textAlignVertical: 'bottom',

                    bottom: -7,
                  }}>
                  8:08 pm
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

const UserIcon = () => {
  let profileIconImg: any;
  let img = require('../../assets/img/cheerful-curly-business-girl-wearing-glasses_176420-206.png');

  if (img != '' || img != null) {
    profileIconImg = (
      <Image
        source={img}
        style={{
          // flexShrink: 0,
          height: 40,
          width: 40,
          borderRadius: 40,
          position: 'absolute',
          zIndex: 200,
        }}
      />
    );
  }

  return (
    <View
      style={{
        borderRadius: 40,
        borderColor: 'blue',
        // borderWidth: 1,
        width: 40,
        height: 40,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'flex-start',
        display: 'flex',
        flexShrink: 0,

        flexDirection: 'column',
        flexGrow: 1,
      }}>
      <Icon
        name="face"
        style={{
          fontSize: 40,
          color: 'blue',
          position: 'absolute',
          zIndex: 100,
          // flexShrink: 0,
        }}
      />
      {profileIconImg}
    </View>
  );
};

const TitleBox = () => {
  return (
    <View // Title Box - Top
      style={{
        // backgroundColor: 'green',
        // padding: 5,

        // display: 'flex',
        // flexDirection: 'column',
        flexShrink: 1,
        flexGrow: 1,
        flexWrap: 'wrap',
        alignContent: 'flex-start',


        // maxWidth: '85%',

        justifyContent: 'center',
        // alignContent: 'space-between',
        // alignItems: 'flex-start ',
        alignItems: 'flex-start',
        // alignSelf: 'flex-start',

        borderWidth: 1,
        borderColor: 'orange',

        maxHeight: 40,
      }}>
      <View // Title
        style={{
          // backgroundColor: 'blue',
          // flexWrap: 'wrap',
          flexDirection: 'row',
          // flexGrow: 1,
          justifyContent: 'flex-start',
          // alignContent: 'stretch',
          alignItems: 'flex-start',
          flexShrink: 1,

          borderColor: 'red',
          borderWidth: 1,
        }}>
        <Text
          style={{
            flexWrap: 'wrap',
            // flexShrink: 1,
            // flexGrow: 1,
            // maxWidth: '80%',
            color: 'red',
            fontWeight: '500',
            padding: 6,
            paddingLeft: 0,
            // backgroundColor: 'blue',

            alignContent: 'flex-start',
            overflow: 'hidden',

            maxWidth: 150,
            fontSize: 16,
          }}
          numberOfLines={1}>
          ~ Sanjaya Sanja Sanja
        </Text>
      </View>

      <View // Number
        style={{
          backgroundColor: 'yellow',
          
          flexWrap: 'wrap',
          // width: '45%',
          justifyContent: 'center',
          // alignContent: 'flex-end',
          // alignSelf: 'flex-end',
          // alignItems: 'flex-end',
          flexShrink: 0,
          right: 10,
          flexDirection: 'column',
          alignSelf: 'flex-end',
        }}>
        <Text
          style={{
            alignSelf: 'flex-end',
            flexWrap: 'wrap',
            fontSize: 16,
          }}>
          +91 77362 21444
        </Text>
      </View>
    </View>
  );
};

const MessageBox = () => {
  return (
    <View // Message Box - Bottom
      style={{
        //   backgroundColor: 'red',
        // padding: 5,

        display: 'flex',
        flexDirection: 'column',
        // flexGrow: 1,
        // paddingBottom: 0,
      }}>
      <View
        style={
          {
            // backgroundColor: 'green',
            // flexWrap: 'wrap',
            // flexShrink: 1,
            // flexDirection: 'row',
            // flexGrow: 1,
            // maxWidth: '70%',
          }
        }>
        <View
          style={{
            //   backgroundColor: 'green',
            // flexWrap: 'wrap',
            // flexShrink: 1,
            // flexDirection: 'column',
            // flexGrow: 1,
            // width: '80%',
            // padding: 8,
            // paddingLeft: 0,
            paddingBottom: 6,
            paddingTop: 6,
          }}>
          <Text
            // numberOfLines={5}
            style={{
              flexWrap: 'wrap',
              fontSize: 16,
              textAlign: 'justify',
              color: 'black',
            }}>
            @Varun Bhavani hi there I am here now as you can see, and I am new
            here , so please hi there I am here now as you can see, and I am new
            here , so please hi there I am here now as you can see, and I am new
            here , so and and
            <Text
              style={{
                flexWrap: 'wrap',
                fontSize: 16,
                color: '#00000000',
              }}>
              _ _ _ _ _ _ _ _ _ _ _ _
            </Text>
          </Text>
        </View>
      </View>

      <View
        style={{
          // backgroundColor: 'teal',
          // flexWrap: 'wrap',
          // flexDirection: 'row',
          // flexGrow: 1,
          // maxWidth: '22%',
          justifyContent: 'flex-end',
          alignContent: 'flex-end',
          alignSelf: 'flex-end',

          // bottom: 8,
          // display: 'none',
        }}>
        <View
          style={{
            //   backgroundColor: 'teal',
            // flexWrap: 'wrap',
            // maxWidth: '22%',
            // justifyContent: 'flex-end',
            // alignContent: 'flex-end',
            // alignSelf: 'flex-end',

            // bottom: 8,
            // position: 'absolute',
            // paddingBottom: 4,
            height: 7,
          }}>
          <Text
            style={{
              fontSize: 14,
              // alignSelf: 'flex-end',
              // textAlign: 'right',
              textAlignVertical: 'top',
              // flexWrap: 'wrap',
              top: -16,
              height: 20,

              // paddingBottom: 4,
            }}>
            8:08 pm
          </Text>
        </View>
      </View>
    </View>
  );
};

export const RecievedTextReferTextMessageBar = () => {
  return (
    <View // Recieved Message Bar
      style={{
        backgroundColor: 'pink',
        // backgroundColor: '#00000000',
        // display: 'flex',
        flexDirection: 'row',
        // flexGrow: 1,
        maxWidth: '85%',
        flexWrap: 'wrap',
        // height: 100,
        // justifyContent: 'flex-start',
        // alignContent: 'flex-start',
        // alignItems: 'flex-start',
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingRight: 10,
        // paddingLeft: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View // Icon
          style={{
            flexWrap: 'wrap',
            flexShrink: 0,
            alignSelf: 'flex-start',
          }}>
          <UserIcon />
        </View>

        <View // Recieved Message Bar
          style={{
            // backgroundColor: '#00000000',
            // backgroundColor: 'yellow',
            borderColor: 'black',
            // borderWidth: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            flexShrink: 1,
            flexGrow: 1,
          }}>
          <View // Recieved Message Bar
            style={{
              // backgroundColor: '#00000000',
              // backgroundColor: 'yellow',
              display: 'flex',
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              flexWrap: 'wrap',
              // maxWidth: '85%',
              // height: 100,
              justifyContent: 'flex-start',
              alignContent: 'flex-start',
              alignItems: 'flex-start',
              // paddingTop: 10,
              // paddingBottom: 10,
              // paddingRight: 10,
              paddingLeft: 8,
            }}>
            <TriangleLeft />

            <View // Container Box
              style={{
                backgroundColor: 'white',
                // backgroundColor: '#c9ffad',
                borderColor: 'green',
                // borderWidth: 1,
                display: 'flex',
                flexWrap: 'wrap',

                flexShrink: 1,
                // flex: 1,
                flexDirection: 'column',
                // flexGrow: 1,
                // maxWidth: '85%',
                // paddingBottom: 5,
                // paddingTop: 5,
                paddingLeft: 6,
                // paddingRight: 20,
                paddingRight: 12,
                // height: 35,
                justifyContent: 'center',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                borderRadius: 12,
                borderTopLeftRadius: 0,
              }}>
              <View // Total Box
                style={{
                  // backgroundColor: 'white',
                  // backgroundColor: '#c9ffad',
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'column',
                  // flexGrow: 1,
                  // width: '100%',
                  // paddingBottom: 0,
                  // paddingTop: 5,
                  // paddingLeft: 12,
                  // paddingRight: 7,
                  // height: 35,
                  // width: '85%',
                  justifyContent: 'center',
                  alignContent: 'flex-start',
                  alignItems: 'center',
                  alignSelf: 'flex-start',

                  borderRadius: 12,
                  borderTopLeftRadius: 0,
                  borderColor: 'yellow',
                  // borderWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',

                    justifyContent: 'flex-start',
                    // paddingRight: 50,
                  }}
                >
                  <View
                    style={{
                      // backgroundColor: 'pink',
                      // padding: 10,
                      // flexGrow: 1,
                      flexWrap: 'wrap',
                      alignContent: 'flex-start',

                      display: 'flex',
                      flexDirection: 'column',
                      // flexShrink: 1,

                      borderColor: 'black',
                      // borderWidth: 1,

                      
                    }}>
                    <TitleBox />

                    <View style={{left: 0, flexWrap: 'wrap'}}>
                      <RefferenceMessage />
                    </View>

                    <MessageBox />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecievedTextReferTextMessageBar;
