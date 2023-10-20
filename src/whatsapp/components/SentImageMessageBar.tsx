import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';

import {LinearGradient, SvgXml} from 'react-native-svg';
import ImageBox from './ImageBox';

const WHATSAPP_GREENS = ['#008069', '#075E54', '#25D366'] as const;

const TriangleRight = () => {
  const xml = `
  <svg
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
      d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path>
    <path
      fill="currentColor"
      d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path>
  </svg>
  `;
  // return <SvgXml xml={xml} width="15" height="15" color='blue'/>;
  return <SvgXml xml={xml} width="15" height="15" color="#c9ffad" />;
};

const SentImageMessageBar = () => {
  return (
    <View // Recieved Message Bar
      style={{
        // backgroundColor: '#00000000',
        display: 'flex',
        flexDirection: 'row',
        // flexGrow: 1,
        maxWidth: '70%',
        // height: 100,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        // paddingTop: 10,
        // paddingBottom: 10,
        paddingRight: 10,
        // paddingLeft: 8,
      }}>
      <View // Container Box
        style={{
          // backgroundColor: 'white',
          backgroundColor: '#c9ffad',
          display: 'flex',
          flexWrap: 'wrap',
          // flex: 1,
          flexDirection: 'column',
          // flexGrow: 1,
          flexShrink: 1,
          // maxWidth: '85%',
          // paddingBottom: 5,
          // paddingTop: 5,
          //   paddingLeft: 12,
          //   paddingRight: 12,/
          // height: 35,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          borderTopRightRadius: 0,
        }}>
        <View // Total Box
          style={{
            // backgroundColor: 'white',
            // backgroundColor: '#c9ffad',
            display: 'flex',
            // flexWrap: 'wrap',
            flexDirection: 'column',
            // flexGrow: 1,
            flexShrink: 1,
            // width: '100%',
            // paddingBottom: 0,
            // paddingTop: 8,
            // paddingLeft: 12,
            // paddingRight: 7,
            // height: 35,
            // width: '85%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',

            borderRadius: 12,
            borderTopLeftRadius: 0,
          }}>
          <View>
            <View
              style={{
                // backgroundColor: 'pink',
                padding: 3,
                paddingBottom: 0,
                // flexGrow: 1,
                // flexShrink: 1,

                display: 'flex',
                flexDirection: 'column',
              }}>
              <View style={{left: 0, flexWrap: 'wrap', flexShrink: 1}}>
                <ImageBox />
              </View>

              <View // Message Box - Bottom
                style={{
                  // backgroundColor: 'red',
                  //   padding: 5,

                  display: 'flex',
                  flexDirection: 'column',
                  // flexGrow: 1,
                  // paddingBottom: 0,
                }}>
                <View
                  style={{
                    // backgroundColor: 'pink',
                    // flexWrap: 'wrap',
                    flexDirection: 'row',
                    // flexGrow: 1,
                    // maxWidth: '22%',
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    alignSelf: 'flex-end',

                    // backgroundColor: 'black',

                    // bottom: 8,
                    // display: 'none',
                  }}>
                  <View
                    style={{
                      // backgroundColor: 'teal',
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
                        fontSize: 16,
                        // alignSelf: 'flex-end',
                        // textAlign: 'right',
                        textAlignVertical: 'top',
                        // flexWrap: 'wrap',
                        top: -22,
                        height: 22,

                        // paddingBottom: 4,
                        marginRight: 4,
                      }}>
                      8:08 pm
                    </Text>
                  </View>

                  <View // Ticks
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      // flexGrow: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'yellow',
                      // height: '100%',
                      flexShrink: 0,
                      height: 7,
                    }}>
                    <IconMatCom
                      name="check-all"
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                        verticalAlign: 'bottom',
                        padding: 2,

                        textAlignVertical: 'bottom',
                        color: '#046dbe',
                        // bottom: -7,
                        top: -12,
                        height: 20,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* </View> */}
      <View style={{position: 'absolute', right: -1, top: 0, zIndex: -1}}>
        <TriangleRight />
      </View>
    </View>
  );
};

export const SentVideoMessageBar = () => {
  return (
    <View // Recieved Message Bar
      style={{
        // backgroundColor: '#00000000',
        display: 'flex',
        flexDirection: 'row',
        // flexGrow: 1,
        maxWidth: '70%',
        // height: 100,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        // paddingTop: 10,
        // paddingBottom: 10,
        paddingRight: 10,
        // paddingLeft: 8,
      }}>
      <View // Container Box
        style={{
          // backgroundColor: 'white',
          backgroundColor: '#c9ffad',
          display: 'flex',
          flexWrap: 'wrap',
          // flex: 1,
          flexDirection: 'column',
          // flexGrow: 1,
          flexShrink: 1,
          // maxWidth: '85%',
          // paddingBottom: 5,
          // paddingTop: 5,
          //   paddingLeft: 12,
          //   paddingRight: 12,/
          // height: 35,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          borderTopRightRadius: 0,
        }}>
        <View // Total Box
          style={{
            // backgroundColor: 'white',
            // backgroundColor: '#c9ffad',
            display: 'flex',
            // flexWrap: 'wrap',
            flexDirection: 'column',
            // flexGrow: 1,
            flexShrink: 1,
            // width: '100%',
            // paddingBottom: 0,
            // paddingTop: 8,
            // paddingLeft: 12,
            // paddingRight: 7,
            // height: 35,
            // width: '85%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',

            borderRadius: 12,
            borderTopLeftRadius: 0,
          }}>
          <View>
            <View
              style={{
                // backgroundColor: 'pink',
                padding: 3,
                paddingBottom: 0,
                // flexGrow: 1,
                // flexShrink: 1,

                display: 'flex',
                flexDirection: 'column',
              }}>
              <View style={{left: 0, flexWrap: 'wrap', flexShrink: 1}}>
                <ImageBox />
              </View>

              <View // Message Box - Bottom
                style={{
                  // backgroundColor: 'red',
                  //   padding: 5,

                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexGrow: 1,
                  alignContent: 'space-between',
                  // flexGrow: 1,
                  // paddingBottom: 0,

                  position: 'absolute',
                  bottom: 0,
                  // left: 5,
                }}>
                <View // Video info box
                  style={{
                    // backgroundColor: 'pink',
                    // backgroundColor: 'yellow',
                    // flexWrap: 'wrap',
                    flexDirection: 'row',
                    // flexGrow: 1,
                    // maxWidth: '22%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignSelf: 'flex-start',

                    // backgroundColor: 'black',

                    // bottom: 8,
                    // display: 'none',
                    paddingLeft: 10,
                  }}>
                  <View // Video Icon
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      // flexGrow: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'yellow',
                      // height: '100%',
                      flexShrink: 0,
                      // height: 7,
                      paddingRight: 4,
                    }}>
                    <IconMat
                      name="videocam"
                      size={28}
                      style={{
                        // fontSize: 20,
                        // fontWeight: 'bold',
                        alignSelf: 'flex-end',
                        // verticalAlign: 'bottom',
                        // padding: 2,

                        // textAlignVertical: 'bottom',
                        // color: '#046dbe',
                        color: 'white',
                        // bottom: -7,
                        // top: -12,
                        // height: 20,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'teal',
                      // flexWrap: 'wrap',
                      // maxWidth: '22%',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                      // bottom: 8,
                      // position: 'absolute',
                      // paddingBottom: 4,
                      // height: 7,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        // alignSelf: 'flex-end',
                        // textAlign: 'right',
                        // textAlignVertical: 'top',
                        // flexWrap: 'wrap',
                        // top: -22,
                        // height: 22,
                        color: 'white',
                        // paddingBottom: 4,
                        // marginRight: 4,
                      }}>
                      0:02
                    </Text>
                  </View>
                </View>

                {/* Spacer */}
                <View style={{flexGrow: 1}}></View>

                <View // Message sent info
                  style={{
                    // backgroundColor: 'pink',
                    // flexWrap: 'wrap',
                    flexDirection: 'row',
                    // flexGrow: 1,
                    // maxWidth: '22%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',

                    // backgroundColor: 'black',

                    // bottom: 8,
                    // display: 'none',
                  }}>
                  <View
                    style={{
                      // backgroundColor: 'teal',
                      // flexWrap: 'wrap',
                      // maxWidth: '22%',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                      // bottom: 8,
                      // position: 'absolute',
                      // paddingBottom: 4,
                      // height: 7,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        // alignSelf: 'flex-end',
                        // textAlign: 'right',
                        // textAlignVertical: 'top',
                        // flexWrap: 'wrap',
                        // top: -22,
                        // height: 22,
                        color: 'white',

                        // paddingBottom: 4,
                        paddingRight: 8,
                      }}>
                      8:08 pm
                    </Text>
                  </View>

                  <View // Ticks
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      // flexGrow: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: 'yellow',
                      // height: '100%',
                      flexShrink: 0,
                      // height: 7,
                    }}>
                    <IconMatCom
                      name="check-all"
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        // verticalAlign: 'bottom',
                        // padding: 2,

                        // textAlignVertical: 'bottom',
                        color: '#046dbe',
                        // bottom: -7,
                        // top: -12,
                        // height: 20,
                      }}
                    />
                  </View>
                </View>
                <View // Info background
                  style={{
                    backgroundColor: '#22222255',

                    height: 35,
                    width: '100%',
                    flexGrow: 1,
                    position: 'absolute',
                    bottom: 0,
                    left: 4,
                    borderBottomRightRadius: 4,
                    borderBottomLeftRadius: 4,
                    zIndex: -100,
                  }}></View>

                
              </View>
              <View
                  style={{
                    flexDirection: 'row',
                    flexGrow: 1,
                    // backgroundColor: 'red',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flexGrow: 1}}></View>
                  <View
                    style={{
                      flexGrow: 1,

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{flexGrow: 1}}></View>
                    <View
                      style={{
                        // flexGrow: 1,
                        height: 100,
                        width: 100,
                        borderRadius: 100,
                        backgroundColor: '#22222255',
                        flexShrink: 0,

                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                         <IconMat
                      name="play-arrow"
                      size={28}
                      style={{
                        fontSize: 60,
                        fontWeight: 'bold',
                        // alignSelf: 'flex-end',
                        // verticalAlign: 'bottom',
                        // padding: 2,

                        // textAlignVertical: 'bottom',
                        // color: '#046dbe',
                        color: 'white',
                        // bottom: -7,
                        // top: -12,
                        // height: 20,
                      }}
                    />
                      </View>
                    <View style={{flexGrow: 1}}></View>
                  </View>
                  <View style={{flexGrow: 1}}></View>
                </View>
            </View>
            
          </View>
        </View>
      </View>
      {/* </View> */}
      <View style={{position: 'absolute', right: -1, top: 0, zIndex: -1}}>
        <TriangleRight />
      </View>
    </View>
  );
};

export default SentImageMessageBar;
