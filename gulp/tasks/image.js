const gulp = require( 'gulp' );
const urls = require('../config');

// const imagemin = require( 'gulp-imagemin' );
const changed = require( 'gulp-changed' );

module.exports = function() {
  return gulp.src( urls.image.src )
    // .pipe( changed('assets/images' ) )
    // .pipe( imagemin() )
    .pipe( gulp.dest( urls.image.dist ) );
};
