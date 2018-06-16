const urls = require('../config');
const filepath = urls.js.dist + 'scripts.js';

const options = {
  options: {
    sourceMap: true
  },
  dist: {
    files: {}
  }
};

options.dist.files[filepath] = filepath;

module.exports = options;