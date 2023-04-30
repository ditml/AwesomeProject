import React from 'react';
import {View, Text} from 'react-native';

import {
  getBatteryLevel,
  hasNotch,
  isTablet,
  isPinOrFingerprintSet,
  getVersion,
  isCameraPresent,
  getSystemVersion,
  getLastUpdateTime,
  getFontScale,
  isLocationEnabled,
  isLandscape,
  getFirstInstallTime,
  isEmulator,
  getPowerState,
  isBatteryCharging,
} from 'react-native-device-info';

export default function DeviceInfo() {
  let batteryLevel = async () => {
    const batteryLevel = await getBatteryLevel();

    console.log(' batteryLevel  ' + batteryLevel); // 0.529999
  };

  let batteryCharging = async () => {
    const batteryCharging = await isBatteryCharging();

    console.log('  batteryCharging ' + batteryCharging); // true
  };

  let powerState = async () => {
    const powerState = await getPowerState();

    console.log(' batteryLevel  ' + powerState.batteryLevel); // 0.319999
    console.log(' batteryState  ' + powerState.batteryState); // unplugged
    console.log('  lowPowerMode ' + powerState.lowPowerMode); // false
  };

  let isAnEmulator = async () => {
    const isAnEmulator = await isEmulator();

    console.log(' isAnEmulator  ' + isAnEmulator); // returns true if emulator, false if physical device
  };

  let timeFirstInstalled = async () => {
    const timeFirstInstalled = await getFirstInstallTime();

    console.log('  timeFirstInstalled ' + timeFirstInstalled); // 1645132888187
  };

  let isLandscapeMode = async () => {
    const isLandscapeMode = await isLandscape();

    console.log(' isLandscapeMode  ' + isLandscapeMode); // true if landscape, false if portrait
  };

  let hasLocationEnabled = async () => {
    const hasLocationEnabled = await isLocationEnabled();

    console.log(' hasLocationEnabled  ' + hasLocationEnabled); // true if enabled, false if disabled
  };

  let fontScale = async () => {
    const fontScale = await getFontScale();

    console.log(' fontScale  ' + fontScale); // 1.25
  };

  let timeLastUpdated = async () => {
    const timeLastUpdated = await getLastUpdateTime();

    console.log('  timeLastUpdated ' + timeLastUpdated); // 1645132888187
  };

  let systemVersion = async () => {
    const systemVersion = await getSystemVersion();

    console.log('  systemVersion ' + systemVersion); // "15.3.1"
  };

  let hasCamera = async () => {
    try {
      const hasCamera = await isCameraPresent();
      console.log(' hasCamera  ' + hasCamera); // true
    } catch (e) {
      // error will be thrown if the camera could not be queried or opened by the CameraManager on Android
    }
  };

  let version = async () => {
    const version = await getVersion();
    console.log('  version ' + version); // 1.0.0
  };

  let hasPinOrFingerprintSet = async () => {
    const hasPinOrFingerprintSet = await isPinOrFingerprintSet();
    console.log('  hasPinOrFingerprintSet ' + hasPinOrFingerprintSet); // true if set, false if not
  };

  let isTabletDevice = async () => {
    const isTabletDevice = await isTablet();
    console.log(' isTabletDevice  ' + isTabletDevice); // true if it's a tablet, false if not
  };

  let deviceHasNotch = async () => {
    const deviceHasNotch = await hasNotch();
    console.log('  deviceHasNotch ' + deviceHasNotch); // true if device has a notch, false if not
  };

  batteryLevel();
  batteryCharging();
  powerState();
  isAnEmulator();
  timeFirstInstalled();
  isLandscapeMode();
  hasLocationEnabled();
  fontScale();
  timeLastUpdated();
  systemVersion();
  hasCamera();
  version();
  hasPinOrFingerprintSet();
  isTabletDevice();
  deviceHasNotch();

  return (
    <View>
      <Text>Hi there..</Text>
    </View>
  );
}
