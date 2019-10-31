const css = require( '../config' ).paths.css;

module.exports = {
  options: {
    processors: [
      require( 'autoprefixer' )(),
      require("css-mqpacker")({
        sort: true
      }),
      require( 'cssnano' )
    ]
  },
  dist: {
    src: css.dist + '*.css'
  }
};
