const gulp = require('gulp');
const urls = require('../config');

module.exports = () => {
  console.log('watching...');
  gulp.watch( urls.srcPath + 'image/**', [ 'image' ] );
  gulp.watch( urls.srcPath + 'svg/**', [ 'svg' ] );
  gulp.watch( urls.srcPath + 'scss/**', [ 'css' ] );
  gulp.watch( urls.srcPath + 'js/**', [ 'js' ] );
};
