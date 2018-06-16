const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const svgCow = fs.readFileSync(path.join(__dirname, '../../public/svg/cow-animated.svg'), 'utf8');

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'See You Space Cow - Mimi Kim Web Developer',
    class: 'home',
    svgCow: svgCow,
    hasScript: true,
    hasStyle: true
  });
});

module.exports = router;
