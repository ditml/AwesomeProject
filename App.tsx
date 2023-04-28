import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

export default () => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
        }}>
        <Text>
          <Icon name="rowing" />

          <Icon name="g-translate" color="#00aced" />

          <Icon name="sc-telegram" type="evilicon" color="#517fa4" />

          <Icon
            reverse
            name="ios-american-football"
            type="ionicon"
            color="#517fa4"
          />

          <Icon
            raised
            name="heartbeat"
            type="font-awesome"
            color="#f50"
            onPress={() => console.log('hello')}
          />
        </Text>
      </View>
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </View>
    </>
  );
};
