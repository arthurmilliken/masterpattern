const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const sqlSlug = fs.readFileSync('./sql/lookup-slug.sql', 'utf-8');
const edition = 'ASV';

module.exports = function (router) {
  const db = new sqlite3.Database(process.env.DB_PATH);
  router.get('/slug/:value', (req, res) => {
    let value = req.params.value;
    if (value.endsWith('|')) value = value.substr(0, value.length - 1);
    const params = [edition, value, `${value}|`];
    db.all(sqlSlug, params, (err, rows) => {
      if (err) return res.status(500).send(`<pre>${err.stack}</pre>`);
      res.locals.title = `Verses for ${value}`;
      res.locals.rows = rows;
      res.render('slug');
    })
  });

} 