var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'See You Space Cow - Mimi Kim Web Developer' });
});

module.exports = router;
