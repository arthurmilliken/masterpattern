const debug = require('debug')('off:masterpattern'); // remove 'off:' to activate.

module.exports = function () {
  return (req, res, next) => {
    debug(req.secure);
    if (req.secure) return next();
    else if (req.url.startsWith('/.well-known')) return next();
    const url = 'https://' + req.hostname + req.url;
    debug('auth:' + url);
    res.redirect(url);
  };
};
