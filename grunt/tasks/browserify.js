const jsPath = require('./helper').returnJS();

let options = {
  dist: {
    options: {
      transform: [
        [ 'babelify',
          {
            'presets': ['env'],
            'plugins': ['transform-class-properties'],
          }
        ]
      ]
    },
    files: {}
  }
};

jsPath.forEach( function( elm ) {
  options.dist.files[ elm.dist ] = elm.src;
});

module.exports = options;
