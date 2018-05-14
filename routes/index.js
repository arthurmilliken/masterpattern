const express = require('express');

const color = require('./color');
const content = require('./content');
const greek = require('./greek');
const keys = require('./keys');
const latin = require('./latin');
const english = require('./english');
const tattva = require('./tattva');

module.exports = function (options) {
  const router = express.Router();

  color(router, options);
  content(router, options);
  greek(router, options);
  keys(router, options);
  latin(router, options);
  english(router, options);
  tattva(router, options);

  const simpleView = (view, title) => {
    router.get(`/${view}`, (req, res) => {
      res.locals.title = title;
      res.render(view);
    });
  };

  simpleView('home', 'Home');
  simpleView('masterpattern', 'Master Pattern');
  simpleView('colors', 'Color and Sound');
  simpleView('psalm119', 'Psalm 119');
  simpleView('tattvas', 'Tattvas');

  router.get('/', (req, res) => res.redirect('/home'));
  return router;
};
