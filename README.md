1. Start Metro first

yarn start

2. Start the application

yarn android

3. Modify App.tsx & Repeat




Configute ANDROID_HOME  environment variables

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

________________

Wireless ADB

USB connect

adb tcpip 5555

adb devices

adb connect 192.168.0.105:5555