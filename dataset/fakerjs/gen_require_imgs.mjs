import fs from 'fs';

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

const images_dir = '../../../AwesomeProject/src/assets/img/headshots';
const images_paths = getFiles(images_dir);

// console.log(images_paths[0]);

let data = '';

images_paths.forEach(path => {
  // IMAGES.push(require(path));
  data = data.concat("require('", path, "'),\n");
});

data = '\nconst IMAGES = [ \n' + data + ']; \nexport default IMAGES;';

// console.log(data);

fs.writeFile('images.js', data, err => {
  if (err) console.log(err);
  else {
    console.log('File written successfully\n');
    // console.log("The written has the following contents:");
    // console.log(fs.readFileSync("books.txt", "utf8"));
  }
});

// fs.readdir('../../../AwesomeProject/src/assets/img/headshots', (err, files) => {
//   if (err) {
//     return console.log('Unable to scan directory: ' + err);
//   }

//   files.forEach(function (file) {
//     // Do whatever you want to do with the file
//     path = images_path + file.name;
//     path_string = path.toString();
//     // console.log(path);
//     IMAGES.push(path);
//   });
// });