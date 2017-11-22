module.exports = function (router) {

  router.get('/color', (req, res) => {
    value = req.query.value || '$000';
    res.redirect('/color/' + encodeURI(value));
  });

  router.get('/color/:value', (req, res) => {
    value = req.params.value
    .replace(/^\$/, '#')
    .trim();
    res.locals.title = 'Color';
    res.locals.value = value;
    res.render('color');
  });
}