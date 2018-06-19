const cssPath = require('./helper').returnCSS();

const options = {
  dist: {
    options: {
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
