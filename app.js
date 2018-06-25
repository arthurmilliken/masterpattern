global.Promise = require('bluebird');
require('dotenv').config();

const debug = require('debug')('masterpattern:app');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const fs = require('fs');

const auth = require('./middleware/auth');
const ensureSecure = require('./middleware/ensureSecure');
const routes = require('./routes');

const app = express();

const PORT_HTTP = parseInt(process.env.PORT_HTTP, 10) || null;
const PORT_HTTPS = parseInt(process.env.PORT_HTTPS, 10) || null;
const ENSURE_HTTPS = (process.env.ENSURE_HTTPS || 'false')
  .trim().toLowerCase() === 'true';

if (ENSURE_HTTPS) {
  app.use(ensureSecure());
}

app.use(cookieSession({
  secret: process.env.SECRET || 'S3KR1T_P455W0RD',
  maxAge: (24 * 60 * 60 * 1000) * 10, // 10 days
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(auth());
app.use(routes());
app.use(express.static('secure'));
app.set('view engine', 'ejs');

if (PORT_HTTP) {
  require('http').createServer(app).listen(PORT_HTTP, () => {
    debug(`http: listening on port ${PORT_HTTP}`);
  });
}

if (PORT_HTTPS) {
  require('https').createServer({
    key: fs.readFileSync(process.env.HTTPS_KEY),
    cert: fs.readFileSync(process.env.HTTPS_CERT),
  }, app).listen(PORT_HTTPS, () => {
    debug(`https: listening on port ${PORT_HTTPS}`);
  });
}

