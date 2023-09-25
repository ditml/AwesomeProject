import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconOcti from 'react-native-vector-icons/Octicons';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';

type ChatCardProps = {
  img?: string;
  name?: string;
  msg?: string;
  time?: string;
  ticks?: number;
  selected?: boolean;
  counts?: number;
  state?: number;
};

const WHATSAPP_GREENS = ['#008069', '#075E54', '#25D366'] as const;

const ChatCard = ({
  img = require('../../assets/img/cheerful-curly-business-girl-wearing-glasses_176420-206.png'),
  name = 'Goldy',
  msg = 'Hi there...',
  time = '14/09/23',
  ticks = 3,
  selected = true,
  counts = 16,
  state = 3,
}) => {
  let selectionIconOverlay: any;
  let ticksIcon: any;
  let stateIcon: any;
  let profileIconImg: any;
  let countIcon: any;

  if (ticks == 3) {
    ticksIcon = (
      <IconMatCom
        name="check-all"
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: '#046dbe',
        }}
      />
    );
  } else if (ticks == 2) {
    ticksIcon = (
      <IconMatCom
        name="check-all"
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: '#0000008f',
        }}
      />
    );
  } else if (ticks == 1) {
    ticksIcon = (
      <IconMatCom
        name="check"
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: '#0000008f',
        }}
      />
    );
  } else {
    ticksIcon = <></>;
  }

  if (state == 2) {
    stateIcon = (
      <IconMatCom
        name="volume-variant-off"
        style={{fontSize: 20, padding: 4}}
      />
    );
  }

  if (selected == true) {
    selectionIconOverlay = <SelectionIconOverlay />;
  } else {
    selectionIconOverlay = <></>;
  }

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

  if (counts != 0) {
    countIcon = (
      <View
        style={{
          width: 22,
          height: 22,
          // backgroundColor: '#07be04c2',
          // borderRadius: 20,
          // position: 'absolute',

          // left: 6,
          // top: 6,
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            width: 22,
            height: 22,
            backgroundColor: '#07be04c2',
            borderRadius: 22,
            // position: 'absolute',

            // left: 6,
            // top: 6,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            alignSelf: 'center',
            textAlignVertical: 'center',
            fontSize: 12,
          }}>
          {counts}
        </Text>
      </View>
    );
  } else {
    <></>;
  }

  return (
    /* <Text>Sample Chat Card</Text> */
    <View
      style={{
        backgroundColor: 'white',
        // backgroundColor: 'yellow',
        display: 'flex',
        // flexWrap: 'wrap',
        flexDirection: 'row',
        // width: 360,
        width: '100%',
        height: 85,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderBottomWidth: 1,
        // borderColor: 'grey',
        borderColor: 'lightgrey',
      }}>
      {/* <Text>Left Profile Pic layout</Text> */}
      <View
        style={{
          width: 52,
          height: 52,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'white',

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
        {/* <Text>Profile Pic Overlay Icon</Text> */}
        {/* <ProfilePicOverlayIcon selected={selected} /> */}
        {/* <View
          style={{
            width: 24,
            height: 24,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 0,
            right: 0,
            zIndex: 100,
            position: 'absolute',
          }}>
          {selectionIcon}
        </View> */}
        {/* <SelectionIconOverlay /> */}
        {selectionIconOverlay}
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
          backgroundColor: 'white',
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
                backgroundColor: 'white',
                // backgroundColor: 'pink',
              }}>
              {/* <Text>Upper Left Title Text</Text> */}
              <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
                {name}
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-end',
                flexWrap: 'wrap',
                backgroundColor: 'white',
                marginLeft: 5,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                alignContent: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
              }}>
              {/* <Text>Upper Right Last Seen Text</Text> */}
              <View>
                <Text
                  style={{
                    textAlign: 'auto',
                    textAlignVertical: 'top',
                    verticalAlign: 'top',
                    paddingBottom: 5,
                  }}>
                  {time}
                </Text>
              </View>
            </View>
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
                // alignSelf: 'flex-start',
                // flexWrap: 'wrap',
                backgroundColor: 'white',
                alignContent: 'center',
                justifyContent: 'center',
                marginRight: 5,
              }}>
              <View>
                {/* <Text>Bottom Left Ticks Icon </Text> */}
                {ticksIcon}
              </View>
            </View>
            <View
              style={{
                alignSelf: 'stretch',
                flexGrow: 1,
                backgroundColor: 'white',
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
                  color: '#0000007a',
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
              {stateIcon}

              {countIcon}
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
  );
};

export default ChatCard;

const styles = {
  imageLayoutStyle: {
    backgroundColor: 'white',
    // backgroundColor: 'yellow',
  },

  cardStyle: {
    backgroudColor: 'yellow',
  },
};

const ProfilePicOverlayIcon = (selected: any) => {
  let selectionIcon: any;
  if (selected == true) {
    selectionIcon = (
      <View
        style={{
          borderRadius: 50,
          borderColor: 'white',
          borderWidth: 2,
          backgroundColor: WHATSAPP_GREENS[0],
          width: 24,
          height: 24,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: -3,
          right: -5,
          zIndex: 100,
          position: 'absolute',
        }}>
        <IconMatCom
          name="check-bold"
          style={{
            fontSize: 14,
            color: 'white',
            // backgroundColor: 'green',
            // borderRadius: 16,
            // borderWidth: 2,
            borderColor: 'white',
            alignSelf: 'center',
          }}
        />
      </View>
    );
  } else {
    selectionIcon = <></>;
  }

  return (
    <View
      style={{
        width: 24,
        height: 24,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        right: 0,
        zIndex: 100,
        position: 'absolute',
      }}>
      {selectionIcon}
    </View>
  );
};

export const SelectionIcon = () => {
  return (
    <View
      style={{
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: WHATSAPP_GREENS[0],
        width: 24,
        height: 24,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -3,
        right: -5,
        zIndex: 100,
        position: 'absolute',
      }}>
      <IconMatCom
        name="check-bold"
        style={{
          fontSize: 14,
          color: 'white',
          // backgroundColor: 'green',
          // borderRadius: 16,
          // borderWidth: 2,
          borderColor: 'white',
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export const SelectionIconOverlay = () => {
  return (
    <View
      style={{
        width: 24,
        height: 24,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        right: 0,
        zIndex: 100,
        position: 'absolute',
      }}>
      <SelectionIcon />
    </View>
  );
};
