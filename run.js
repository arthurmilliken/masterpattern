const input = [
  '/home/arthur/dev/masterpattern',
  '/home/arthur/../dev/masterpattern',
  '/home/arthur/dev/../../masterpattern',
  '/home/arthur/./dev/masterpattern',
  '../dev/masterpattern'
];

const parse = (text) => {
  const tokens = text.split('/');
  const result = [];
  tokens.forEach(token => {
    if (token == '.') return;
    else if (token == '..') {
      if (result.length > 0) result.pop();
      else result.push('..');
    }
    else result.push(token);
  });
  return result.join('/');
};

input.forEach(text => {
  console.log(`${text} -> ${parse(text)}`);
});
