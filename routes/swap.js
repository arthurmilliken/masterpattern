module.exports = function (router) {
  router.get('/swap', (req, res) => {
    req.session.deck = req.query.deck || 'bw';
    // console.log('swap:', req.query);
    res.locals.url = req.query.redirect;
    res.render('redirect');
  });

  // router.get('/swap/:deck', (req, res) => {
  //   const deck = req.params.deck;
  //   req.session.deck = deck;
  //   res.locals.title = 'Home';
  //   res.render('home');
  // });
};
