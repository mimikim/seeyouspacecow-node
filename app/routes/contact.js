var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Mimi Kim, Web Developer',
    class: 'contact',
    hasScript: true,
    hasStyle: true
  });
});

module.exports = router;
