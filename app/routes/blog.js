var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('blog', {
    title: 'About Mimi Kim, Web Developer',
    class: 'blog',
    hasScript: true,
    hasStyle: true
  });
});

module.exports = router;
