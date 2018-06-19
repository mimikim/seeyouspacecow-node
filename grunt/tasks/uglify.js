const jsPath = require('./helper').returnJS();

const options = {
  all: {
    files: {}
  }
};

jsPath.forEach( function( elm ) {
  options.all.files[ elm.dist ] = elm.dist;
});

module.exports = options;
