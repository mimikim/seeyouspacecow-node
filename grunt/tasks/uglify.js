const urls = require('../config');
const destination = urls.js.dist + 'global.js';
const vendorDestination =  urls.js.dist + 'vendor.js';

const index = urls.js.dist + 'home.js';
const about = urls.js.dist + 'about.js';
const blog = urls.js.dist + 'blog.js';
const contact = urls.js.dist + 'contact.js';
const portfolio = urls.js.dist + 'portfolio.js';

const options = {
  all: {
    files: {}
  }
};

// minify both script and vendor files
options.all.files[destination] = destination;
options.all.files[vendorDestination] = vendorDestination;
options.all.files[index] = index;
options.all.files[about] = about;
options.all.files[blog] = blog;
options.all.files[contact] = contact;
options.all.files[portfolio] = portfolio;

module.exports = options;
