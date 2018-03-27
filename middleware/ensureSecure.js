module.exports = function () {
  return (req, res, next) => {
    if (req.secure) return next();
    else if (req.url.startsWith('/.well-known')) return next();
    const url = 'https://' + req.hostname + req.url;
    res.redirect(url);
  };
};
