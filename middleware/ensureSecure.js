const debug = require('debug')('off:masterpattern:app:ensureSecure'); // remove 'off:' to activate.

module.exports = function () {
  debug('init');
  return (req, res, next) => {
    debug(req.secure);
    if (req.secure) return next();
    else if (req.url.startsWith('/.well-known')) return next();
    const url = 'https://' + req.hostname + req.url;
    debug(url);
    res.redirect(url);
  };
};
