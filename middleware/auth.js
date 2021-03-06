const debug = require('debug')('off:masterpattern'); // remove 'off:' to activate logging.
const express = require('express');
const urlencode = require('urlencode');

module.exports = function () {
  const router = express.Router();

  router.get('/login', (req, res) => {
    res.locals.errors = [];
    res.locals.redirect = req.query.redirect || '/';
    res.render('login');
  });

  router.post('/login', (req, res) => {
    debug(`/login:post: ${req.body.password}`);
    if (req.body.password !== process.env.PASSWORD) {
      res.locals.errors = ['incorrect password.'];
      res.locals.redirect = req.body.redirect;
      res.render('login');
    } else {
      req.session.user = 'admin';
      debug(`auth:session.user: ${req.session.user}`);
      debug(`auth:redirect: ${req.body.redirect}`);
      res.redirect(req.body.redirect || '/');
    }
  });

  router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/login');
  });

  router.use((req, res, next) => {
    if (process.env.SKIP_AUTH === 'true') return next();
    debug(`auth:session.user: ${req.session.user}`);
    debug(`auth:path: ${req.path}`);
    if (!req.session.user && req.path !== '/login') {
      res.redirect('/login?redirect=' + urlencode(req.originalUrl));
    } else next();
  });

  return router;
};
