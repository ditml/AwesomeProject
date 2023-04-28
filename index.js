/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {enableFreeze} from 'react-native-screens'; // React Freeze

enableFreeze(true); // Enable - 'true | Disable - false | React Freeze

AppRegistry.registerComponent(appName, () => App);
