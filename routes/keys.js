const _ = require('lodash');
const tarot = require('../models/tarot');

module.exports = function (router) {
  router.get('/keys', (req, res) => {
    res.redirect('/keys/QBLH');
  });

  router.get('/keys/:word', (req, res) => {
    let word = req.params.word.trim();
    word = word.replace(/[ .]/g, '_');

    const letters = [];
    let hebrew = '';
    let gematria = 0;
    for (let i = 0; i < word.length; i++) {
      let token = word.substr(i, 2);
      switch (token.substr(1, 1)) {
        case 'h':
        case 'z':
        case 'f':
          i++;
          break;
        default:
          token = token.substr(0, 1);
      }
      const letter = tarot[token];
      if (letter) {
        letters.push(letter);
        hebrew += letter.hebrew;
        gematria += letter['letter-value'];
      }
    }
    hebrew += ' ';

    // Substitute final letters where needed.
    hebrew = hebrew
      .replace(/([א-ת])כ /g, '$1ך ')
      .replace(/([א-ת])מ /g, '$1ם ')
      .replace(/([א-ת])נ /g, '$1ן ')
      .replace(/([א-ת])פ /g, '$1ף ')
      .replace(/([א-ת])צ /g, '$1ץ ')

      .replace(/([א-ת])כ־/g, '$1ך־')
      .replace(/([א-ת])מ־/g, '$1ם־')
      .replace(/([א-ת])נ־/g, '$1ן־')
      .replace(/([א-ת])פ־/g, '$1ף־')
      .replace(/([א-ת])צ־/g, '$1ץ־')

      .replace(/([א-ת])כ׀/g, '$1ך׀')
      .replace(/([א-ת])מ׀/g, '$1ם׀')
      .replace(/([א-ת])נ׀/g, '$1ן׀')
      .replace(/([א-ת])פ׀/g, '$1ף׀')
      .replace(/([א-ת])צ׀/g, '$1ץ׀')

      .replace(/^ך/, 'כ')
      .replace(/^ם/, 'מ')
      .replace(/^ן/, 'נ')
      .replace(/^ף/, 'פ')
      .replace(/^ץ/, 'צ')
      .trim();

    word = word
      .replace(/Tf/g, 'Tz')
      .replace(/f/g, '')
      .replace(/_/g, ' ');

    const longest = _.reduce(
      hebrew.split(' '),
      (sum, word2) => Math.max(word2.length, sum), 0
    );

    let letterWidth = 200;
    let letterHeight = 323;
    if (longest > 11) {
      letterWidth = 48;
      letterHeight = 77;
    } else if (longest > 7) {
      letterWidth = 77;
      letterHeight = 124;
    } else if (longest > 4) {
      letterWidth = 124;
      letterHeight = 200;
    }

    res.locals.title = `Tarot Keys - ${word}`;
    res.locals.word = word;
    res.locals.hebrew = hebrew;
    res.locals.gematria = gematria;
    res.locals.letters = letters;
    res.locals.letterWidth = letterWidth;
    res.locals.letterHeight = letterHeight;
    res.locals.spacerWidth = Math.floor(letterWidth / 2);
    res.render('keys');
  });
};
