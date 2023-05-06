import {StatusBar} from 'react-native';
import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Share from 'react-native-share';
import file from './assets/images/base64';
import {
  readFile,
  readDirAssets,
  existsAssets,
  existsRes,
} from 'react-native-fs';

// // get a list of files and directories in the main bundle
// readDirAssets('') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
//   .then(result => {
//     console.log('GOT RESULT', result);

//     // stat the first file
//     return Promise.all(result[0].path);
//   })
//   .then(statResult => {
//     if (statResult[0].isFile()) {
//       // if we have a file, read it
//       return readFile(statResult[1], 'utf8');
//     }

//     return 'no file';
//   })
//   .then(contents => {
//     // log the file contents
//     console.log(contents);
//   })
//   .catch(err => {
//     console.log(err.message, err.code);
//   });

// import {
//   CachesDirectoryPath,
//   DocumentDirectoryPath,
//   DownloadDirectoryPath,
//   ExternalCachesDirectoryPath,
//   ExternalStorageDirectoryPath,
//   LibraryDirectoryPath,
//   MainBundlePath,
//   TemporaryDirectoryPath,
//   PicturesDirectoryPath,
//   ExternalDirectoryPath,
//   readDir,
//   readFile,
//   stat,
// } from 'react-native-fs';

// console.log(CachesDirectoryPath);
// console.log(DocumentDirectoryPath);
// console.log(DownloadDirectoryPath);
// console.log(ExternalCachesDirectoryPath);
// console.log(ExternalStorageDirectoryPath);
// console.log(LibraryDirectoryPath);
// console.log(MainBundlePath);
// console.log(TemporaryDirectoryPath);
// console.log(PicturesDirectoryPath);
// console.log(ExternalDirectoryPath);

// // get a list of files and directories in the main bundle
// readDir('/') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
//   .then(result => {
//     console.log('GOT RESULT', result);

//     // stat the first file
//     return Promise.all([stat(result[0].path), result[0].path]);
//   })
//   .then(statResult => {
//     if (statResult[0].isFile()) {
//       // if we have a file, read it
//       return readFile(statResult[1], 'utf8');
//     }

//     return 'no file';
//   })
//   .then(contents => {
//     // log the file contents
//     console.log(contents);
//   })
//   .catch(err => {
//     console.log(err.message, err.code);
//   });

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';

const options = {
  title,
  url,
  message,
};

export function ShareNativeText() {
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
      <Button
        onPress={async () => {
          await share();
        }}
        title="Share"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    paddingTop: 50,
    marginVertical: 20,
    width: 612,
    height: 408,
  },
  stretchImg: {
    // width: 200,
    // height: 200,
    resizeMode: 'center',
    width: 612,
    height: 408,
  },
});

export function ShareNativeImagePdf() {
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
      <Image
        // source={require(image!elephants.jpg)}
        source={{
          uri: 'elephants',
        }}
        // source={{
        //   uri: 'image:/elephants.jpg',
        // }}
        // source={{
        //   uri: 'src/assets/img/elephant.jpg',
        // }}
        // source={images.elephantImg}
        style={{...styles.containerImg, ...styles.stretchImg}}
        // style={{width: 612, height: 408}}
      />
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share();
          }}
          title="Share Text"
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share({
              title: 'Sharing image file from awesome share app',
              message: 'Please take a look at this image',
              url: 'data:image/pdf;base64,' + file.img,
            });
          }}
          title="Share Image"
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share({
              title: 'Sharing pdf file from awesome share app',
              message: 'Please take a look at this file',
              url: file.pdf,
            });
          }}
          title="Share pdf"
        />
      </View>
    </View>
  );
}
