const express = require('express');

const card = require('./card');
const color = require('./color');
const content = require('./content');
const greek = require('./greek');
const keys = require('./keys');
const latin = require('./latin');
const english = require('./english');
const swap = require('./swap');
const tattva = require('./tattva');
const gematria = require('./gematria');
const slug = require('./slug');
const tone = require('./tone');

module.exports = function (options) {
  const router = express.Router();

  card(router, options);
  color(router, options);
  content(router, options);
  greek(router, options);
  keys(router, options);
  latin(router, options);
  english(router, options);
  swap(router, options);
  tattva(router, options);
  gematria(router, options);
  slug(router, options);
  tone(router, options);

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
  simpleView('greatwork', 'The Great Work');

  router.get('/', (req, res) => res.redirect('/home'));
  return router;
};
