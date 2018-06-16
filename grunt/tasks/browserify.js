const urls = require('../config');
const filepath = urls.js.dist + 'global.js';
const index = urls.js.dist + 'home.js';
const about = urls.js.dist + 'about.js';
const blog = urls.js.dist + 'blog.js';
const contact = urls.js.dist + 'contact.js';
const portfolio = urls.js.dist + 'portfolio.js';

const filepathSrc = 'app/src/js/' + 'global.js';
const indexSrc = 'app/src/js/' + 'home.js';
const aboutSrc = 'app/src/js/' + 'about.js';
const blogSrc = 'app/src/js/' + 'blog.js';
const contactSrc = 'app/src/js/' + 'contact.js';
const portfolioSrc = 'app/src/js/' + 'portfolio.js';

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

options.dist.files[filepath] = filepathSrc;
options.dist.files[index] = indexSrc;
options.dist.files[about] = aboutSrc;
options.dist.files[blog] = blogSrc;
options.dist.files[contact] = contactSrc;
options.dist.files[portfolio] = portfolioSrc;

module.exports = options;
