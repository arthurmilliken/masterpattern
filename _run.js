require('dotenv').config();
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const sqlSlug = fs.readFileSync('./sql/lookup-slug.sql', 'utf-8');
const sqlGematria = fs.readFileSync('./sql/lookup-gematria.sql', 'utf-8');

function run() {
  const db = new sqlite3.Database(process.env.DB_PATH);
  const params = [209];
  db.all(sqlGematria, params, (err, rows) => {
    if (err) return console.error(err);
    console.log(rows);
  });
}

function main() {
  run();
}

main()