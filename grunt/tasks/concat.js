const urls = require('../config');

module.exports = {
  main: {
    src: [ 'app/src/js/**' ],
    dest: urls.js.dist + 'scripts.js'
  },
  vendor: {
    src: [
      'app/src/vendor/jquery/dist/jquery.min.js',
      'app/src/vendor/animejs/anime.min.js',
      'app/src/vendor/espi-a11y-dialog/a11y-dialog.min.js',
      'app/src/vendor/slick-carousel/slick/slick.min.js'
    ],
    dest: urls.js.dist + 'vendor.js'
  }
};
