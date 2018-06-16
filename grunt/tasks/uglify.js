const urls = require('../config');
const destination = urls.js.dist + 'scripts.min.js';
const vendorDestination =  urls.js.dist + 'vendor.min.js';

const options = {
  all: {
    files: {}
  }
};

// minify both script and vendor files
options.all.files[destination] =  urls.js.dist + 'scripts.js';
options.all.files[vendorDestination] =  urls.js.dist + 'vendor.js';

module.exports = options;
