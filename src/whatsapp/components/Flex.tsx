import React from 'react';
import {Text, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
// flexGrow: 1,
        // width: '80%',
        // backgroundColor: 'yellow',
      }}>
      <View style={{
        flexDirection: 'row',

        // width: '65%',
        flexGrow: 65,
        flexBasis: 65,

        backgroundColor: 'yellow',
        // flexWrap: 'wrap'
      }}>
        <Text>Flex1 Flex1  Flex1  Flex1  Flex1  Flex1  Flex1  Flex1  Flex1 </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        // flexBasis: 200,

        // width: '35%',
        flexGrow: 35,
        flexBasis: 35,

        backgroundColor: 'brown',
      }}>
        {/* <Text>Flex1 Flex1  Flex1  Flex1  Flex1  Flex1  Flex1  Flex1  Flex1 </Text> */}
        <Text></Text>
      </View>
    </View>
  );
};

export default Flex;
