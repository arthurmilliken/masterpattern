module.exports = function (router) {
  router.get('/tattva/:name', (req, res) => {
    const name = req.params.name;
    res.locals.title = name;
    res.locals.src = `/img/tattva/${name}.gif`;
    res.render('image');
  });
};
