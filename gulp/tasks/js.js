const gulp = require( 'gulp' );
const urls = require('../config');

const eslint = require( 'gulp-eslint' );
const concat = require( 'gulp-concat' );
const uglify = require( 'gulp-uglify' );
const rename = require( 'gulp-rename' );
const babel = require( 'gulp-babel' );

const jstask = ( srcArray, filename ) => {
  return gulp.src( srcArray )
    .pipe( eslint() )
    .pipe( babel() )
    .pipe( concat( filename + '.js' ) )
    .pipe( uglify() )
    .pipe( rename( filename + '.min.js' ) )
    .pipe( gulp.dest( urls.js.dist ) );
};

module.exports = () => {
  urls.js.src.forEach( ( { src, filename } ) => {
    jstask( src, filename );
  });
};
