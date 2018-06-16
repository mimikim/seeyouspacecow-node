const gulp = require( 'gulp' );
const urls = require('../config');
const cssVars = ( urls.css.src + 'variables' );

const rename = require( 'gulp-rename' );

const postcss = require( 'gulp-postcss' );

const autoprefixer = require( 'autoprefixer' );
const svg = require( 'postcss-svg' )();
const simplevars = require( 'postcss-simple-vars' )({ variables: cssVars });
const importcss = require('postcss-partial-import')({ /* options */ });

module.exports = () => {
  return gulp.src( urls.css.src + "style.css" )
    .pipe( postcss( [
      simplevars,
      importcss,
      autoprefixer({
        browsers: [ 'last 2 versions', 'ie >= 9', 'and_chr >= 2.3' ]
      }),
      svg,
    ] ) )
    .pipe( rename( 'style.min.css' ) )
    .pipe( gulp.dest( urls.css.dist ) );
};
