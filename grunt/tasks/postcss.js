const urls = require( '../config' );

module.exports = {
  options: {
    processors: [
      require( 'autoprefixer' )( { browsers: 'last 2 versions' } ),
      require('postcss-svg')()
    ]
  },
  dist: {
    src: urls.css.dist + '*.css'
  }
};
