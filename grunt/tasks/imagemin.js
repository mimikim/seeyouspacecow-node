const urls = require('../config');

module.exports = {
  dynamic: {
    files: [ {
      expand: true,
      cwd: urls.image.src,
      src: [ '*.{png,jpg,gif}' ],
      dest: urls.image.dist
    } ]
  }
};