const debug = require('debug')('masterpattern:ensureSecure');

module.exports = function (app) {
  return (req, res, next) => {
    if (req.secure) return next();
    else if (req.url.startsWith('/.well-known')) return next();
    let url = 'https://' + req.hostname + req.url;
    debug(`redirecting to https: ${url}`);
    res.redirect(url);
  };
};