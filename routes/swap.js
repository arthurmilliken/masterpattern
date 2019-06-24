module.exports = function (router) {
  router.get('/swap', (req, res) => {
    const deck = req.query.deck || 'bw';
    res.redirect('/swap/' + encodeURI(deck));
  });

  router.get('/swap/:deck', (req, res) => {
    const deck = req.params.deck;
    req.session.deck = deck;
    res.locals.title = 'Home';
    res.render('home');
  });
};
