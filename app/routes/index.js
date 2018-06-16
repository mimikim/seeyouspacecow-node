const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'See You Space Cow - Mimi Kim Web Developer',
    class: 'home',
    hasScript: true,
    hasStyle: true
  });
});

module.exports = router;
