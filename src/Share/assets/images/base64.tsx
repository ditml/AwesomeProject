import RNFetchBlob from 'rn-fetch-blob';
// import images from '../../../assets';
// import getPath from

let fs = RNFetchBlob.fs;
const file = {
  img: '',
  pdf: '',
};

// let path_img = RNFetchBlob.fs.asset('elephant.jpg');
// let path_img = require('elephant.jpg');

// fs.readFile(images.elephantImg, 'base64').then(data => {
//   file.img = data;
// });

// Works Only for IOS ###
// const path_pdf = RNFetchBlob.fs.asset('./ABC.pdf');
// fs.readFile(path_pdf, 'base64').then(data => {
//   file.pdf = data;
// });

export default file;
