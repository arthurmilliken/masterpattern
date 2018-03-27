const table = require('../models/latin-gematria');

module.exports = function (router) {
  // /latin?word=bona.fide
  router.get('/latin', (req, res) => {
    if (!req.query.word) return res.redirect('/latin?word=bona.fide');
    let word = req.query.word.trim();

    let gematria = 0;
    for (let i = 0; i < word.length; i++) {
      const token = word.substr(i, 1);
      gematria += (table[token] || 0);
    }

    word = word.replace(/[ -.]/g, ' ');

    res.locals.title = `Latin Gematria - ${word}`;
    res.locals.word = word;
    res.locals.gematria = gematria;
    res.render('latin');
  });
};
