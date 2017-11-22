module.exports = function (options) {
  const router = require('express').Router();

  require('./color')(router, options);
  require('./content')(router, options);
  require('./greek')(router, options);
  require('./keys')(router, options);
  require('./latin')(router, options);

  const simpleView = (view, title) => {
    router.get(`/${view}`, (req, res) => {
      res.locals.title = title;
      res.render(view);
    });
  };

  simpleView('home', 'Home');
  simpleView('masterpattern', 'Master Pattern');
  simpleView('colors', 'Colors');

  router.get('/', (req, res) => res.redirect('/home'));
  return router;
};