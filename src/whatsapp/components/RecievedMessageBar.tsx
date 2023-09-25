import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {SvgXml} from 'react-native-svg';

import  RefferenceMessage  from './RefferenceMessage';

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
  return <SvgXml xml={xml} width="15" height="15" color="#fff" />;
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

export const RecievedMessageBar = () => {
  return (
    <View // Recieved Message Bar
      style={{
        backgroundColor: '#00000000',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        maxWidth: '85%',
        // height: 100,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingRight: 10,
        paddingLeft: 8,
      }}>

      <View // Left Triangle box
        style={{position: 'absolute', left: -3, top: 0, zIndex: -100}}>
        <TriangleLeft />
      </View>

      <View // Container Box
        style={{
          backgroundColor: 'white',
          // backgroundColor: '#c9ffad',
          display: 'flex',
          flexWrap: 'wrap',
          // flex: 1,
          flexDirection: 'column',
          flexGrow: 1,
          // maxWidth: '85%',
          // paddingBottom: 5,
          // paddingTop: 5,
          paddingLeft: 12,
          paddingRight: 12,
          // height: 35,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          borderTopLeftRadius: 0,
        }}>

        <View // Total Box
          style={{
            // backgroundColor: 'white',
            // backgroundColor: '#c9ffad',
            display: 'flex',
            // flexWrap: 'wrap',
            flexDirection: 'column',
            flexGrow: 1,
            // width: '100%',
            // paddingBottom: 0,
            // paddingTop: 5,
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
                // padding: 10,
                // flexGrow: 1,

                display: 'flex',
                flexDirection: 'column',
              }}>

              <View // Title Box - Top
                style={{
                  // backgroundColor: 'green',
                  // padding: 5,

                  display: 'flex',
                  flexDirection: 'row',
                  // flexWrap: 'wrap',
                  // maxWidth: '85%',

                  justifyContent: 'flex-start',
                  alignContent: 'space-between',
                  alignItems: 'stretch',
                  alignSelf: 'flex-start',
                }}>

                <View // Title
                  style={{
                    // backgroundColor: 'blue',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    alignContent: 'stretch',
                    alignItems: 'stretch',
                    flexShrink: 1,
                  }}>
                  <Text
                    style={{
                      // flexWrap: 'wrap',
                      flexShrink: 1,
                      flexGrow: 1,
                      maxWidth: '80%',
                      color: 'red',
                      fontWeight: '500',
                      padding: 6,
                      paddingLeft: 0,
                      // backgroundColor: 'blue',

                      fontSize: 16,
                    }}
                    numberOfLines={1}>
                    ~ Sanjaya Sanjaya Sanjaya
                  </Text>
                </View>

                <View // Number
                  style={{
                    // backgroundColor: 'yellow',
                    flexWrap: 'wrap',
                    // width: '45%',
                    justifyContent: 'center',
                    // alignContent: 'flex-end',
                    // alignSelf: 'flex-end',
                    // alignItems: 'flex-end',
                    flexShrink: 0,
                    right: 10,
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

              <View style={{left: -6}}>
                <RefferenceMessage />
              </View>

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
                      }}>
                      @Varun Bhavani hi there I am here now as you can see, and
                      I am new here , so please hi there I am here now as you
                      can see, and I am new here , so please hi there I am here
                      now as you can see, and I am new here , so and and 
                      <Text
                        style={{
                          flexWrap: 'wrap',
                          fontSize: 16,
                          color: '#00000000'
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
            </View>
          </View>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

// export const RefferenceMessage = () => {
//   return (
//     <View // Top Container Box
//       style={{
//         // backgroundColor: 'red',
//         // backgroundColor: '#c9ffad',
//               backgroundColor: '#e6e6e6',

//         display: 'flex',
//         flexWrap: 'wrap',
//         // flex: 1,
//         flexDirection: 'column',
//         // flexGrow: 1,
//         // maxWidth: '85%',
//         // paddingBottom: 5,
//         // paddingTop: 5,
//         paddingLeft: 6,

//         // paddingRight: 6,
//         // height: 35,
//         justifyContent: 'center',
//         alignContent: 'center',
//         alignItems: 'center',

//         borderLeftWidth: 16,
//         // borderTopWidth: -1,
//         // borderLeftWidth: 6,
//         borderLeftColor: 'red',
//         borderRadius: 14,
//       }}>
//       <View // Total Box
//         style={{
//           // backgroundColor: 'white',
//           //   backgroundColor: '#c9ffad',
//               // backgroundColor: '#e6e6e6',

//           display: 'flex',
//           // flexWrap: 'wrap',
//           flexDirection: 'column',
//           // flexGrow: 1,
//           // width: '100%',
//           // paddingBottom: 0,
//           //   paddingTop: 5,
//           // paddingLeft: 12,
//           // paddingRight: 7,
//           // height: 35,
//           // width: '85%',
//           justifyContent: 'center',
//           alignContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'flex-start',

//           // borderRadius: 8,
//         }}>
//         <View
//         style={{
//           left: -16,
//           paddingLeft: 10,
//           backgroundColor: '#e6e6e6',
//         }}
//         >
//           <View
//             style={{
//               // backgroundColor: '#e6e6e6',
//               //   padding: 6,
//               // paddingTop: 0,
//               // paddingBottom: 0,
//               // flexGrow: 1,

//               display: 'flex',
//               flexDirection: 'column',
//             }}>
//             <View // User Title Box - Top
//               style={{
//                 // backgroundColor: '#e6e6e6',
//                 // padding: 5,

//                 display: 'flex',
//                 flexDirection: 'row',
//                 // flexWrap: 'wrap',
//                 // maxWidth: '85%',

//                 justifyContent: 'flex-start',
//                 alignContent: 'space-between',
//                 alignItems: 'stretch',
//                 alignSelf: 'flex-start',
//               }}>
//               <View
//                 style={{
//                   //   backgroundColor: 'blue',
//                   flexWrap: 'wrap',
//                   flexDirection: 'row',
//                   flexGrow: 1,
//                   justifyContent: 'flex-start',
//                   alignContent: 'stretch',
//                   alignItems: 'stretch',
//                   flexShrink: 1,
//                 }}>
//                 <Text
//                   style={{
//                     // flexWrap: 'wrap',
//                     flexShrink: 1,
//                     flexGrow: 1,
//                     color: 'red',
//                     maxWidth: '80%',
//                     fontWeight: '500',
//                     padding: 6,
//                     paddingLeft: 0,
//                     // backgroundColor: 'blue',

//                     fontSize: 14,
//                   }}
//                   numberOfLines={1}>
//                   ~ Sanjaya Sanjaya Sanjaya
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   //   backgroundColor: 'yellow',
//                   flexWrap: 'wrap',
//                   // width: '45%',
//                   justifyContent: 'center',
//                   // alignContent: 'flex-end',
//                   // alignSelf: 'flex-end',
//                   flexShrink: 0,
//                   right: 10,
//                 }}>
//                 <Text
//                   style={{
//                     alignSelf: 'flex-end',
//                     flexWrap: 'wrap',
//                     fontSize: 14,
//                   }}>
//                   +91 77362 21444
//                 </Text>
//               </View>
//             </View>
//             <View // Message Box - Bottom
//               style={{
//                 // backgroundColor: 'red',
//                 // padding: 5,

//                 display: 'flex',
//                 flexDirection: 'column',
//                 // flexGrow: 1,
//                 // paddingBottom: 0,
//               }}>
//               <View
//                 style={
//                   {
//                     //   backgroundColor: 'green',
//                     // flexWrap: 'wrap',
//                     // flexShrink: 1,
//                     // flexDirection: 'row',
//                     // flexGrow: 1,
//                     // maxWidth: '70%',
//                   }
//                 }>
//                 <View
//                   style={
//                     {
//                       // backgroundColor: 'green',
//                       // flexWrap: 'wrap',
//                       // flexShrink: 1,
//                       // flexDirection: 'column',
//                       // flexGrow: 1,
//                       // width: '80%',
//                       // paddingTop: 6,

//                       // paddingLeft: 6,
//                       paddingBottom: 8,
//                     }
//                   }>
//                   <Text
//                     numberOfLines={3}
//                     style={{
//                       flexWrap: 'wrap',
//                       fontSize: 14,
//                       textAlign: 'justify',
//                     }}>
//                     @Varun Bhavani hi there I am here now as you can see, and I
//                     am new here , so please hi there I am here now as you can
//                     see, and I am new here , so please hi there I am here now as
//                     you can see, and I am new here , so please
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

export default RecievedMessageBar;
