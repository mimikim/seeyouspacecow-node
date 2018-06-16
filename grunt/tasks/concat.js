const urls = require('../config');
const filepath = 'app/src/js/' + 'scripts.js';
const home = 'app/src/js/' + 'home.js';
const about = 'app/src/js/' + 'about.js';
const blog = 'app/src/js/' + 'blog.js';
const contact = 'app/src/js/' + 'contact.js';
const portfolio = 'app/src/js/' + 'portfolio.js';

let options = {
  // main: {
  //   files: {}
  // },

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

// options.main.files[ urls.js.dist + 'global.js' ] = 'app/src/js/global.js';
// options.main.files[ urls.js.dist + 'home.js' ] = home;
// options.main.files[ urls.js.dist + 'about.js' ] = about;
// options.main.files[ urls.js.dist + 'blog.js' ] = blog;
// options.main.files[ urls.js.dist + 'contact.js' ] = contact;
// options.main.files[ urls.js.dist + 'portfolio.js' ] = portfolio;

module.exports = options;
