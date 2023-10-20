import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';

import RefferenceMessage from './RefferenceMessage';

import {SvgXml} from 'react-native-svg';
import ImageBox from './ImageBox';

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

const SentMessageBar_ = () => {
  return (
    <View
      style={{
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        // flexGrow: 1,
        // width: '100%',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        // paddingTop: 10,
        // paddingBottom: 10,
        paddingRight: 10,
        // paddingLeft: 10,
        maxWidth: '85%',
      }}>
      <View
        style={{
          backgroundColor: '#c9ffad',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          // flexGrow: 1,
          // width: '100%',
          // paddingBottom: 5,
          // paddingTop: 5,
          paddingLeft: 12,
          paddingRight: 7,
          height: 35,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          borderTopRightRadius: 0,

          // maxWidth: '85%',
        }}>
        <View // Message
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            flexShrink: 0,
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
              color: 'black',
              // padding: 2,
              textAlignVertical: 'bottom',
            }}>
            Ok sdfsdsd
          </Text>
        </View>
        <View // Time
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            flexGrow: 1,
            flexShrink: 0,
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
              padding: 4,

              textAlignVertical: 'bottom',

              bottom: -7,

              // backgroundColor: 'pink',
            }}>
            9:52 pm
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
          }}>
          <IconMatCom
            name="check-all"
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              alignSelf: 'flex-end',
              verticalAlign: 'bottom',
              padding: 2,

              textAlignVertical: 'bottom',
              color: '#046dbe',
              bottom: -7,
            }}
          />
        </View>
      </View>
      <View style={{position: 'absolute', right: -1, top: 0, zIndex: -1}}>
        <TriangleRight />
      </View>
    </View>
  );
};

const SentImageTextMessageBar = () => {
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
                padding: 4,
                // flexGrow: 1,
                // flexShrink: 1,

                display: 'flex',
                flexDirection: 'column',
              }}>
              <View style={{left: 0}}>
                <ImageBox />
              </View>

              <View // Message Box - Bottom
                style={{
                  //   backgroundColor: 'red',
                //   padding: 5,

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
                      padding: 4,
                      // paddingLeft: 0,
                      paddingBottom: 6,
                      paddingTop: 4,
                    }}>
                    <Text
                      // numberOfLines={5}
                      style={{
                        flexWrap: 'wrap',
                        fontSize: 16,
                        textAlign: 'justify',
                        color: 'black',
                      }}>
                      @Varun Bhavani hi there I am here now as you can see, and
                      I am new here , so please hi there I am here now as you
                      can see, and I am new here , so please hi there I am here
                      now as you can see, and I am new here , so please and  a 
                      <Text
                        style={{
                          flexWrap: 'wrap',
                          fontSize: 16,
                          color: '#00000000'
                        }}>
                        _ ___________
                      </Text>
                    </Text>
                  </View>
                </View>

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
                        top: -20,
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
                        top: -10,
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

export const SentVideoTextMessageBar = () => {
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
                padding: 4,
                // flexGrow: 1,
                // flexShrink: 1,

                display: 'flex',
                flexDirection: 'column',
              }}>
              <View style={{left: 0}}>
                <ImageBox />
              </View>

              <View // Message Box - Bottom
                style={{
                  //   backgroundColor: 'red',
                //   padding: 5,

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
                      padding: 4,
                      // paddingLeft: 0,
                      paddingBottom: 6,
                      paddingTop: 4,
                    }}>
                    <Text
                      // numberOfLines={5}
                      style={{
                        flexWrap: 'wrap',
                        fontSize: 16,
                        textAlign: 'justify',
                        color: 'black',
                      }}>
                      @Varun Bhavani hi there I am here now as you can see, and
                      I am new here , so please hi there I am here now as you
                      can see, and I am new here , so please hi there I am here
                      now as you can see, and I am new here , so please and  a 
                      <Text
                        style={{
                          flexWrap: 'wrap',
                          fontSize: 16,
                          color: '#00000000'
                        }}>
                        _ ___________
                      </Text>
                    </Text>
                  </View>
                </View>

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
                        top: -20,
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
                        top: -10,
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

export default SentImageTextMessageBar;

