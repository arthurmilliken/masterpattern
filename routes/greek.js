const table = require('../models/greek-gematria');

module.exports = function (router) {
  // /greek?word=oinos
  router.get('/greek', (req, res) => {
    if (!req.query.word) return res.redirect('/greek?word=ihsous.christos');
    let original = req.query.word.trim();
    const word = original.replace(/[ -.]/g, '_');

    let result = '';
    let upper = '';
    let capitalized = '';
    let gematria = 0;
    let first = true;
    for (let i = 0; i < word.length; i++) {
      let token = word.substr(i, 2);
      switch (token) {
        case 'ch':
        case 'ks':
        case 'ph':
        case 'ps':
        case 'th':
          i++;
          break;
        default:
          token = token.substr(0, 1);
      }
      const letter = table[token];
      if (letter) {
        result += letter.greek;
        upper += letter.capital;
        if (first) {
          capitalized += letter.capital;
          first = false;
        } else capitalized += letter.greek;
        if (token === '_') first = true;

        gematria += letter.value;
      }
    }

    // Substitute final letters where needed.
    result += ' ';
    result = result
      .replace(/σ[ ]/g, 'ς ')
      .trim();

    capitalized += ' ';
    capitalized = capitalized
      .replace(/σ[ ]/g, 'ς ')
      .trim();

    original = original
      .replace(/[ -.]/g, ' ');

    res.locals.title = `Greek Gematria - ${original}`;
    res.locals.result = result;
    res.locals.upper = upper;
    res.locals.capitalized = capitalized;
    res.locals.gematria = gematria;
    res.render('greek');
  });
};
