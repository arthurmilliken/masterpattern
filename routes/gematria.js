const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const sqlGematria = fs.readFileSync('./sql/lookup-gematria.sql', 'utf-8');

module.exports = function (router) {
  const db = new sqlite3.Database(process.env.DB_PATH);
  router.get('/gematria/:value', (req, res) => {
    const value = req.params.value;
    db.all(sqlGematria, [value], (err, rows) => {
      if (err) return res.status(500).send(`<pre>${err.stack}</pre>`);
      res.locals.title = `Gematria entries for ${value}`;
      res.locals.rows = rows;
      res.render('gematria');
    })
  });

} 