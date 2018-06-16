var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio', {
    title: 'Mimi Kim Web Developer Portfolio',
    class: 'portfolio',
    hasScript: true,
    hasStyle: true
  });
});

module.exports = router;
