const co = require('co');
const commonmark = require('commonmark');
const fs = require('co-fs');
const path = require('path');

const contentDir = path.resolve(__dirname, '../secure/content');
const reader = new commonmark.Parser({smart: true});
const writer = new commonmark.HtmlRenderer();

function renderContent(entry, name, res) {
  co(function* () {
    const file = path.resolve(contentDir, `${entry}.md`);
    try {
      const content = yield fs.readFile(file, 'utf8');
      const parsed = reader.parse(content);
      res.locals.content = writer.render(parsed);
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
    if (!isNaN(num)) {
      name = `Gematria: ${name}`;
      entry = `gematria/${entry}`;
    }
    renderContent(entry, name, res);
  });

  router.get('/genesis/:chapter', (req, res) => {
    const chapter = req.params.chapter;
    renderContent(`genesis/${chapter}`, `Genesis ${chapter}`, res);
  });

  router.get('/1_chronicles/:chapter', (req, res) => {
    const chapter = req.params.chapter;
    renderContent(`1_chronicles/${chapter}`, `1 Chronicles ${chapter}`, res);
  });

  router.get('/genesis/:chapter/:verse', (req, res) => {
    const chapter = req.params.chapter;
    const verse = req.params.verse;
    renderContent(`genesis/${chapter}/${verse}`, `Genesis ${chapter}:${verse}`, res);
  });
};
