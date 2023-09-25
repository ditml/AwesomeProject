import React from 'react';
import {Text, View} from 'react-native';

const RefferenceMessage = () => {
    return (
      <View // Top Container Box
        style={{
          // backgroundColor: 'red',
          // backgroundColor: '#c9ffad',
                backgroundColor: '#e6e6e6',
  
          display: 'flex',
          flexWrap: 'wrap',
          // flex: 1,
          flexDirection: 'column',
          // flexGrow: 1,
          // maxWidth: '85%',
          // paddingBottom: 5,
          // paddingTop: 5,
          paddingLeft: 6,
  
          // paddingRight: 6,
          // height: 35,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
  
          borderLeftWidth: 12,
          // borderTopWidth: -1,
          // borderLeftWidth: 6,
          borderLeftColor: 'red',
          borderRadius: 8,
        }}>
        <View // Total Box
          style={{
            // backgroundColor: 'white',
            //   backgroundColor: '#c9ffad',
                // backgroundColor: '#e6e6e6',
  
            display: 'flex',
            // flexWrap: 'wrap',
            flexDirection: 'column',
            // flexGrow: 1,
            // width: '100%',
            // paddingBottom: 0,
            //   paddingTop: 5,
            // paddingLeft: 12,
            // paddingRight: 7,
            // height: 35,
            // width: '85%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
  
            // borderRadius: 8,
          }}>
          <View
          style={{
            left: -14,
            paddingLeft: 10,
            backgroundColor: '#e6e6e6',
          }}
          >
            <View
              style={{
                // backgroundColor: '#e6e6e6',
                //   padding: 6,
                // paddingTop: 0,
                // paddingBottom: 0,
                // flexGrow: 1,
  
                display: 'flex',
                flexDirection: 'column',
              }}>
              <View // User Title Box - Top
                style={{
                  // backgroundColor: '#e6e6e6',
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
                <View
                  style={{
                    //   backgroundColor: 'blue',
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
                      color: 'red',
                      maxWidth: '80%',
                      fontWeight: '500',
                      padding: 6,
                      paddingLeft: 0,
                      // backgroundColor: 'blue',
  
                      fontSize: 14,
                    }}
                    numberOfLines={1}>
                    ~ Sanjaya Sanjaya Sanjaya
                  </Text>
                </View>
                <View
                  style={{
                    //   backgroundColor: 'yellow',
                    flexWrap: 'wrap',
                    // width: '45%',
                    justifyContent: 'center',
                    // alignContent: 'flex-end',
                    // alignSelf: 'flex-end',
                    flexShrink: 0,
                    right: 0,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      flexWrap: 'wrap',
                      fontSize: 14,
                    }}>
                    +91 77362 21444
                  </Text>
                </View>
              </View>
              <View // Message Box - Bottom
                style={{
                  // backgroundColor: 'red',
                  // padding: 5,
  
                  display: 'flex',
                  flexDirection: 'column',
                  // flexGrow: 1,
                  // paddingBottom: 0,
                }}>
                <View
                  style={
                    {
                      //   backgroundColor: 'green',
                      // flexWrap: 'wrap',
                      // flexShrink: 1,
                      // flexDirection: 'row',
                      // flexGrow: 1,
                      // maxWidth: '70%',
                    }
                  }>
                  <View
                    style={
                      {
                        // backgroundColor: 'green',
                        // flexWrap: 'wrap',
                        // flexShrink: 1,
                        // flexDirection: 'column',
                        // flexGrow: 1,
                        // width: '80%',
                        // paddingTop: 6,
  
                        // paddingLeft: 6,
                        paddingBottom: 8,
                      }
                    }>
                    <Text
                      numberOfLines={3}
                      style={{
                        flexWrap: 'wrap',
                        fontSize: 14,
                        textAlign: 'justify',
                      }}>
                      @Varun Bhavani hi there I am here now as you can see, and I
                      am new here , so please hi there I am here now as you can
                      see, and I am new here , so please hi there I am here now as
                      you can see, and I am new here , so please
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  export default RefferenceMessage;