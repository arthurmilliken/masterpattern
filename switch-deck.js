const rimraf = require('rimraf');
const ncp = require('ncp');

let deck = process.argv[2];
let path = `${__dirname}/secure/img/323x522`;
let path_from = path;

switch (deck) {
  case 'bw':
    path_from += '_bw';
    break;
  case 'new':
    path_from += '_new';
    break;
  case 'orig':
    path_from += '_orig';
    break;
  default:
    console.log(`usage: node ${process.argv[1]} [bw | new | orig]\n`);
    process.exit(1);
    break;
}

rimraf(path, (err) => {
  if (err) return console.error(err);
  ncp(path_from, path, (err) => {
    if (err) return console.error(err);
    console.log(`copied ${path_from} to ${path}.`);
  })
});

