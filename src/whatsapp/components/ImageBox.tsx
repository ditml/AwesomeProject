import React from 'react';
import {Image, Text, View} from 'react-native';

const ImageBox_ = () => {
  let img = require('../../assets/img/Mahalaxmi_Bangaluru_IMG_20230827_005018.jpg');

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
        // paddingLeft: 6,

        // paddingRight: 6,
        // height: 35,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

        // borderLeftWidth: 12,
        // borderTopWidth: -1,
        // borderLeftWidth: 6,
        // borderLeftColor: 'red',
        // borderRadius: 8,
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
            // left: -14,
            // paddingLeft: 10,
            backgroundColor: '#e6e6e6',
          }}>
          <View
            style={{
              // backgroundColor: '#e6e6e6',
              //   padding: 6,
              // paddingTop: 0,
              // paddingBottom: 0,
              //   flexGrow: 1,

              display: 'flex',
              flexDirection: 'column',
            }}>
            <View // Message Box - Bottom
              style={{
                // backgroundColor: 'red',
                // padding: 5,

                display: 'flex',
                flexDirection: 'column',
                // flexShrink: 1,
                // flexGrow: 1,
                // paddingBottom: 0,
              }}>
              <View
                style={{
                  //   backgroundColor: 'green',
                  flexWrap: 'wrap',
                  //   flexShrink: 1,
                  flexDirection: 'column',
                  // flexGrow: 1,
                  // maxWidth: '70%',
                }}>
                <View
                  style={{
                    backgroundColor: 'green',
                    flexWrap: 'wrap',
                    // flexShrink: 1,
                    // flexDirection: 'column',
                    flexDirection: 'row',
                    // flexGrow: 1,
                    // width: '80%',
                    // paddingTop: 6,

                    // paddingLeft: 6,
                    // paddingBottom: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={img}
                    style={{
                      maxHeight: 340,
                      maxWidth: 240,
                      flexWrap: 'wrap',
                      alignSelf: 'center',
                      //   borderRadius: 52,
                      //   position: 'absolute',
                      //   zIndex: 200,
                      // width: '50%',
                      // height: '50%',
                      // flexGrow: 1,
                      //   flexWrap: 'wrap',
                      //   flexShrink: 1,
                      //   justifyContent: 'center',
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: 'yellow',
                      width: '100%',
                      height: 25,
                      position: 'relative',
                      bottom: 0,
                      right: 0,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const ImageBox = () => {
  let img = require('../../assets/img/Mahalaxmi_Bangaluru_IMG_20230827_005018.jpg');
  let img2 = require('../../assets/img/Hyd_Bday_IMG_20230827_004524.jpg');
  let img3 = require('../../assets/img/CMRI_Durgapur_IMG_20230827_005222.jpg');
  let img4 = require('../../assets/img/CMTI_IMG_20230827_004748.jpg');
  let img5 = require('../../assets/img/Gandikota_IMG_20230827_005103.jpg');
  let img6 = require('../../assets/img/Golkonda_IMG_20230827_004714.jpg');
  let img7 = require('../../assets/img/Mahalaxmi_Bangaluru_IMG_20230827_005018.jpg');
  let img8 = require('../../assets/img/Mall_Bangaluru_IMG_20230827_004908.jpg');
  let img9 = require('../../assets/img/Mall_Icecream_IMG_20230827_004631.jpg');

  return (
    <View // Top Container Box
      style={{
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={img4}
        style={{
          maxHeight: 380,
          //   maxWidth: 278,
          maxWidth: '100%',

          borderRadius: 6,
          flexWrap: 'wrap',
          //   flexShrink: 1,
          aspectRatio: 540 / 960,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export const ImageReferBox = () => {
  let img = require('../../assets/img/Mahalaxmi_Bangaluru_IMG_20230827_005018.jpg');
  let img2 = require('../../assets/img/Hyd_Bday_IMG_20230827_004524.jpg');
  let img3 = require('../../assets/img/CMRI_Durgapur_IMG_20230827_005222.jpg');
  let img4 = require('../../assets/img/CMTI_IMG_20230827_004748.jpg');
  let img5 = require('../../assets/img/Gandikota_IMG_20230827_005103.jpg');
  let img6 = require('../../assets/img/Golkonda_IMG_20230827_004714.jpg');
  let img7 = require('../../assets/img/Mahalaxmi_Bangaluru_IMG_20230827_005018.jpg');
  let img8 = require('../../assets/img/Mall_Bangaluru_IMG_20230827_004908.jpg');
  let img9 = require('../../assets/img/Mall_Icecream_IMG_20230827_004631.jpg');

  return (
    <View // Top Container Box
      style={{
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 1,
        

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <Image
        source={img4}
        style={{
          maxHeight: 90,
            maxWidth: 60,
          // maxWidth: '100%',

          borderRadius: 6,
          flexWrap: 'wrap',
            flexShrink: 1,
          aspectRatio: 54 / 96,
        }}
        // resizeMode="cover"
      />
    </View>
  );
};

export default ImageBox;
