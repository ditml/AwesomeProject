import React, {Component} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

import Pdf from 'react-native-pdf';

// Screen that shows the contents of a PDF
export default function OpenPdf() {
  const navigationOptions = {
    title: 'Product Variants',
  };

  const source = require('../assets/ABC.pdf');

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Pdf
        style={styles.pdf}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          alert(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          alert(`current page: ${page}`);
        }}
        onError={error => {
          alert(`error` + error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
