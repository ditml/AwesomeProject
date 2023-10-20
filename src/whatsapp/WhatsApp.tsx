import React from 'react';
import Home from './components/Home';
import Chat from './components/Chat';
import {Text} from 'react-native-svg';
import Flex from './components/Flex';

export default function WhatsApp() {
  let x = 1;

  if (x == 1) {
    return <Chat />;
  } else if (x == 0) {
    return <Home />;
  } else {
    return <Flex />;
  }
}
