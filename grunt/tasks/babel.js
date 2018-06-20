const jsPath = require('./helper').returnJS();

const options = {
  options: {
    sourceMap: true
  },
  dist: {
    files: {}
  }
};

jsPath.forEach( function( elm ) {
  options.dist.files[ elm.dist ] = elm.dist;
});

module.exports = options;
