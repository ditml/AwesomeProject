import {StyleSheet, Button, View, Platform} from 'react-native';
import React, {useEffect} from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Share from 'react-native-share';

function ShareNativePdf() {
  let downloadPath =
    Platform.OS === 'ios'
      ? ReactNativeBlobUtil.fs.dirs.DocumentDir + '/awesome.pdf'
      : ReactNativeBlobUtil.fs.dirs.DownloadDir + '/awesome.pdf';

  const shareOptions = {
    title: 'Share file',
    failOnCancel: false,
    url: `file://${downloadPath}`,
  };

  useEffect(() => {
    openPdf();
  }, []);

  const openPdf = () => {
    ReactNativeBlobUtil.config({
      fileCache: true,
      appendExt: 'pdf',
      addAndroidDownloads: {
        title: 'awesome pdf',
        description: 'An awesome PDF',
        mime: 'application/pdf',
        useDownloadManager: true,
        mediaScannable: true,
        notification: true,
        path: downloadPath,
      },
    })
      .fetch(
        'GET',
        'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
      )
      .then(res => {
        const path = res.path();
        console.log(path);
      });
  };

  const sharePdf = async () => {
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log('Result =>', ShareResponse);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Click to Share PDF" onPress={() => sharePdf()} />
    </View>
  );
}

export default ShareNativePdf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
