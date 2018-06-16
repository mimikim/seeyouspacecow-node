// explicitly call tasks
const tasks = [
  'image',
  'svg',
  'css',
  'js'
];

const gulp = require('./gulp')(tasks);
gulp.task('default', tasks);
