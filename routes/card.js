const tarot = require('../models/tarot');

module.exports = function (router) {
  router.get('/card/:key', (req, res) => {
    const deck = req.session.deck || 'orig';
    const card = tarot[req.params.key];
    const path = `/img/323x522_${deck}/${card.filename}`;
    res.redirect(path);
  });
};
