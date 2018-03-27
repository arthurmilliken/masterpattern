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

const PORT = app.locals.port = parseInt(process.env.PORT, 10) || 8080;
const PORT_SSL = app.locals.portSSL = parseInt(process.env.PORT_SSL, 10) || 8443;

app.use(ensureSecure(app));
app.use(cookieSession({
  secret: process.env.SECRET || 'S3KR1T_P455W0RD',
  maxAge: 846000000, // 10 days
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(auth());
app.use(routes());
app.use(express.static('secure'));
app.set('view engine', 'ejs');

require('http').createServer(app).listen(PORT, () => {
  debug(`http: listening on port ${PORT}`);
});

require('https').createServer({
  key: fs.readFileSync(process.env.HTTPS_KEY),
  cert: fs.readFileSync(process.env.HTTPS_CERT),
}, app).listen(PORT_SSL, () => {
  debug(`https: listening on port ${PORT_SSL}`);
});

