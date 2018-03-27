const table = require('../models/english-gematria');

module.exports = function (router) {
  // /english?word=fortune
  router.get('/english', (req, res) => {
    if (!req.query.word) return res.redirect('/english?word=fortune');
    let word = req.query.word.trim();
    let gematria = 0;
    for (let i = 0; i < word.length; i++) {
      const token = word.substr(i, 1);
      gematria += (table[token] || 0);
    }
    word = word.replace(/[ -.]/g, ' ');
    res.locals.title = `English Gematria - ${word}`;
    res.locals.word = word;
    res.locals.gematria = gematria;
    res.render('latin');
  });
};
