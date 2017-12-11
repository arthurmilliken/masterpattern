const
  urlencode = require('urlencode')
;

module.exports = function () {
  const router = require('express').Router();

  router.get('/login', (req, res) => {
    res.locals.errors = [];
    res.locals.redirect = req.query['redirect'] || '/';
    res.render('login');
  });

  router.post('/login', (req, res) => {
    if (req.body.password !== process.env.PASSWORD) {
      res.locals.errors = ['incorrect password.'];
      res.locals.redirect = req.body.redirect;
      res.render('login');
    }
    else {
      req.session.user = 'admin';
      res.redirect(req.body.redirect || '/');
    }
  });

  router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/login');
  });

  router.use((req, res, next) => {
    if (!req.session.user && req.path !== '/login') {
      res.redirect('/login?redirect=' + urlencode(req.originalUrl));
    }
    else next();
  });

  return router;
};