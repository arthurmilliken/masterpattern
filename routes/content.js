const co = require('co');
const fs = require('co-fs');
const markdown = require('markdown').markdown;
const path = require('path');

const contentDir = path.resolve(__dirname, '../secure/content');

function renderContent(entry, name, res) {
  co(function* () {
    const file = path.resolve(contentDir, `${entry}.md`);
    try {
      const content = yield fs.readFile(file, 'utf8');
      res.locals.content = markdown.toHTML(content);
    } catch (e) {
      res.locals.content = `No content found for ${name}`;
    }
    res.locals.title = name;
    res.render('content');
  });
}

module.exports = function (router) {
  router.get('/content/:entry', (req, res) => {
    let entry = req.params.entry.trim();
    entry = entry.replace(/.md$/, '');
    let name = entry;
    const num = parseInt(entry, 10);
    if (num !== NaN) name = `Gematria: ${name}`
    if (num < 10) {
      entry = `0-9/${entry}`;
    } else if (num < 100) {
      entry = `10-99/${entry}`;
    } else if (num < 1000) {
      entry = `100-999/${entry}`;
    } else if (num < 10000) {
      entry = `1000-9999/${entry}`;
    }
    renderContent(entry, name, res);
  });

  router.get('/genesis/:chapter', (req, res) => {
    const chapter = req.params.chapter;
    renderContent(`genesis/${chapter}`, `Genesis ${chapter}`, res);
  });

  router.get('/genesis/:chapter/:verse', (req, res) => {
    const chapter = req.params.chapter;
    const verse = req.params.verse;
    renderContent(`genesis/${chapter}/${verse}`, `Genesis ${chapter}:${verse}`, res);
  });
};
