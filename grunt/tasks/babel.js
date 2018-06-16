const urls = require('../config');
const filepath = urls.js.dist + 'global.js';
const index = urls.js.dist + 'home.js';
const about = urls.js.dist + 'about.js';
const blog = urls.js.dist + 'blog.js';
const contact = urls.js.dist + 'contact.js';
const portfolio = urls.js.dist + 'portfolio.js';

const options = {
  options: {
    sourceMap: true
  },
  dist: {
    files: {}
  }
};

options.dist.files[filepath] = filepath;
options.dist.files[index] = index;
options.dist.files[about] = about;
options.dist.files[blog] = blog;
options.dist.files[contact] = contact;
options.dist.files[portfolio] = portfolio;

module.exports = options;