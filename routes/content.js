const
  co = require('co'),
  fs = require('co-fs'),
  markdown = require('markdown').markdown,
  contentDir = __dirname + '/../secure/content'
;

module.exports = function (router) {
  router.get('/content/:entry', (req, res) => {
    co(function*() {
      let entry = req.params.entry.trim();
      entry = entry.replace(/.md$/, '');
      num = parseInt(entry);
      if (num < 10) {
        entry = `/0-9/${entry}`;
      }
      else if (num < 100) {
        entry = `/10-99/${entry}`;        
      }
      else if (num < 1000) {
        entry = `/100-999/${entry}`;        
      }
      else if (num < 10000) {
        entry = `/1000-9999/${entry}`;        
      }
      const file =  contentDir + `/${entry}.md`;
      try {
        let content = yield fs.readFile(file, 'utf8');
        res.locals.content = markdown.toHTML(content);
      }
      catch (e) {
        res.locals.content = `No content found for ${entry}`;
      }
      res.locals.title = `Gematria - ${entry}`;
      res.render('content');
    });
  });
};