import React from 'react';
import {View, Text, SliderBase, ScrollView} from 'react-native';
import ChatCard from './ChatCard';

import IMAGES from '../../../dataset/fakerjs/images';
import DATA from '../../../dataset/fakerjs/data';
import {FlatList} from 'react-native';

let img_length = IMAGES.length;
// console.log('img_length: ' + img_length);
let data_length = DATA.length;
// console.log('data_length: ' + data_length);

let INFO: any = [];
let info_item: any;
let info_length = img_length < data_length ? img_length : data_length;
info_length = 20;

for (let i = 0; i < info_length; i++) {
  info_item = {
    srl: i,
    img: IMAGES[i],
    data: DATA[i],
  };
  INFO.push(info_item);
}
console.log(INFO);

// const IMAGES = [
//   require('../../assets/img/headshots/1031081.jpeg'),
//   require('../../assets/img/headshots/1040880.jpeg'),
//   require('../../assets/img/headshots/1043471.jpeg'),
//   require('../../assets/img/headshots/1054251.jpeg'),
//   require('../../assets/img/headshots/1499327.jpeg'),
//   require('../../assets/img/headshots/1687675.jpeg'),
//   require('../../assets/img/headshots/1858175.jpeg'),
//   require('../../assets/img/headshots/2078149.jpeg'),
//   require('../../assets/img/headshots/2080382.jpeg'),
//   require('../../assets/img/headshots/2080383.jpeg'),
//   require('../../assets/img/headshots/220453.jpeg'),
//   require('../../assets/img/headshots/2709388.jpeg'),
//   require('../../assets/img/headshots/2726111.jpeg'),
//   require('../../assets/img/headshots/2773977.jpeg'),
//   require('../../assets/img/headshots/3445219.jpeg'),
//   require('../../assets/img/headshots/2918513.jpeg'),
//   require('../../assets/img/headshots/3763152.jpeg'),
//   require('../../assets/img/headshots/3763188.jpeg'),
//   require('../../assets/img/headshots/3851294.jpeg'),
//   require('../../assets/img/headshots/4010484.jpeg'),
//   require('../../assets/img/headshots/415829.jpeg'),
//   require('../../assets/img/headshots/4350178.jpeg'),
//   require('../../assets/img/headshots/4355346.jpeg'),
//   require('../../assets/img/headshots/4382484.jpeg'),
// ];

export function ChatsTab() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'lightblue',
      }}>
      <ChatsFlatList />
    </View>
  );
}

function ChatList() {
  return <ChatsScrollList />;
}

function ChatsScrollList() {
  return (
    <ScrollView
      // style={{
      //   flex: 1,
      //   // justifyContent: 'center',
      //   // alignItems: 'center',
      //   backgroundColor: 'lightblue',
      // }}
      contentContainerStyle={
        {
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          // backgroundColor: 'lightblue',
        }
      }>
      {/* <ScrollView></ScrollView> */}
      <ChatCard img={IMAGES[0]} counts={DATA[0].counts} />
      <ChatCard img={IMAGES[1]} counts={1} />
      <ChatCard img={IMAGES[2]} counts={2} />
      <ChatCard img={IMAGES[3]} counts={3} />
      <ChatCard img={IMAGES[4]} counts={4} />
      <ChatCard img={IMAGES[5]} counts={5} />
      <ChatCard img={IMAGES[6]} counts={6} />
      <ChatCard img={IMAGES[7]} counts={7} />
      <ChatCard img={IMAGES[8]} counts={8} />
      <ChatCard img={IMAGES[9]} counts={9} />
      <ChatCard img={IMAGES[10]} counts={10} />
      <ChatCard img={IMAGES[11]} counts={11} />
      <ChatCard img={IMAGES[12]} counts={12} />
      <ChatCard img={IMAGES[13]} counts={13} />
      <ChatCard img={IMAGES[14]} counts={14} />
      <ChatCard img={IMAGES[15]} counts={15} />
      <ChatCard img={IMAGES[16]} counts={16} />
    </ScrollView>
  );
}

function ChatsFlatList() {
  return (
    <FlatList
      data={INFO}
      renderItem={({item}) => <ChatCard 
      img={item.img} 
      name={item.data.name} 
      msg={item.data.msg}
      time={item.data.seen}
      selected={item.data.selected}
      counts={item.data.counts}
      state={item.data.state}
      ticks={item.data.ticks}
      />}
      keyExtractor={item => item.srl}
      // extraData={selectedId}
    />
  );
}
