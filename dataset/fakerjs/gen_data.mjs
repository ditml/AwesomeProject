import fs from 'fs';

import {faker, hr} from '@faker-js/faker';

const COUNT = 50;
const SEED = 111;

faker.seed(SEED);

let DATA = [];
let dataItem = {};

// const images_di = require('../../../AwesomeProject/src/assets/img/headshots/1031081.jpeg');
let path;
let path_string;

function padNumber(number) {
  return number < 10 ? '0' + number : number;
}

// let sex = faker.datatype.boolean() ? 'female' : 'male';
// let name = faker.person.fullName({sex: sex});
// let msg = faker.lorem.sentence(5);
// // let day = ;
// // day = day < 10 ? '0' + day : day;
// let hrs = padNumber(faker.number.int({min: 1, max: 28}));
// let mins = padNumber(faker.number.int({min: 1, max: 28}));
// let night = faker.datatype.boolean() ? ' AM' : ' PM';
// let day = padNumber(faker.number.int({min: 1, max: 28}));
// let month = padNumber(faker.number.int({min: 1, max: 12}));
// let year = padNumber(faker.number.int({min: 21, max: 23}));

// let date = day + '/' + month + '/' + year;
// let time = hrs + ':' + mins + night;

// let ticks = faker.number.int({min: 0, max: 3});
// let counts = faker.number.int({min: 0, max: 16});
// let state = faker.number.int({min: 0, max: 2});
// let selected = faker.datatype.boolean();

// console.log(sex);
// console.log(name);
// console.log(msg);
// console.log(date);
// console.log(time);
// console.log(ticks);
// console.log(counts);
// console.log(state);
// console.log(selected);

let sex;
let name;

let msg;
let hrs;
let mins;
let night;
let day;
let month;
let year;

let date;
let time;
let seen;

let ticks;
let counts;
let state;
let selected;

for (let i = 0; i < COUNT; i++) {
  sex = faker.datatype.boolean() ? 'female' : 'male';
  name = faker.person.fullName({sex: sex});

  msg = faker.lorem.sentence(5);
  hrs = padNumber(faker.number.int({min: 1, max: 28}));
  mins = padNumber(faker.number.int({min: 1, max: 28}));
  night = faker.datatype.boolean() ? ' AM' : ' PM';
  day = padNumber(faker.number.int({min: 1, max: 28}));
  month = padNumber(faker.number.int({min: 1, max: 12}));
  year = faker.number.int({min: 21, max: 23});
  seen = faker.number.int({min: 0, max: 2});

  date = day + '/' + month + '/' + year;
  time = hrs + ':' + mins + night;
  if (seen == 2) {
    seen = date;
  } else if (seen == 1) {
    seen = 'Yesterday';
  } else {
    seen = time;
  }

  ticks = faker.number.int({min: 0, max: 3});
  counts = faker.number.int({min: 0, max: 16});
  state = faker.number.int({min: 0, max: 2});
  selected = faker.datatype.boolean();
  dataItem = {
    sex: sex,
    name: name,
    msg: msg,
    seen: seen,
    ticks: ticks,
    selected: selected,
    counts: counts,
    state: state,
  };
  DATA.push(dataItem);
}

// console.log(DATA);

let data = '';

data = '\nconst DATA = ' + JSON.stringify(DATA) + '; \nexport default DATA;';
console.log(data);

fs.writeFile('data.js', data, err => {
  if (err) console.log(err);
  else {
    console.log('File written successfully\n');
    // console.log("The written has the following contents:");
    // console.log(fs.readFileSync("books.txt", "utf8"));
  }
});

// export default DATA;
