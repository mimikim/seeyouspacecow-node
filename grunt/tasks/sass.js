const cssPath = require('../config').returnCSS();
const options = {
  dist: {
    options: {
      sourcemap: 'none',
      style: 'compressed'
    },
    files: {}
  }
};

// set filepaths
cssPath.forEach( function( elm ) {
  options.dist.files[ elm.dist ] = elm.src;
});

module.exports = options;
