module.exports = function (router) {
  router.get('/swap', (req, res) => {
    req.session.deck = req.query.deck || 'bw';
    res.locals.url = req.query.redirect;
    res.render('redirect');
  });

};
