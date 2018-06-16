const gulp = require( 'gulp' );
const urls = require('../config');

const svgmin = require( 'gulp-svgmin' );

module.exports = function() {
  return gulp.src( urls.svg.src )
    .pipe(svgmin( {
      plugins: [ {
        removeDoctype: true
      }, {
        removeComments: true
      }, {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }, {
        convertColors: {
          names2hex: false,
          rgb2hex: false
        }
      }, {
        cleanupIDs: false
      } ]
    } ) )
    .pipe( gulp.dest( urls.svg.dist ) );
};

