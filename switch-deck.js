const rimraf = require('rimraf');
const ncp = require('ncp');

const deck = process.argv[2];
const path = `${__dirname}/secure/img/323x522`;
let pathFrom = path;

switch (deck) {
  case 'bw':
    pathFrom += '_bw';
    break;
  case 'new':
    pathFrom += '_new';
    break;
  case 'orig':
    pathFrom += '_orig';
    break;
  default:
    console.log(`usage: node ${process.argv[1]} [bw | new | orig]\n`);
    process.exit(1);
    break;
}

rimraf(path, (err) => {
  if (err) return console.error(err);
  ncp(pathFrom, path, (err2) => {
    if (err2) return console.error(err2);
    console.log(`copied ${pathFrom} to ${path}.`);
  });
});

