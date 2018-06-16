var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Mimi Kim, Web Developer',
    class: 'contact'
  });
});

module.exports = router;
