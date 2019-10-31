const jsPath = require('../config').returnJS();

let options = {
  dist: {
    options: {
      transform: [
        [ 'babelify',
          {
            'presets': ['@babel/preset-env'],
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
