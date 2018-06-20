const urls = require('../config');

module.exports = {
  dynamic: {
    files: [ {
      expand: true,
      cwd: urls.img.src,
      src: [ '**/*.{png,jpg,gif}' ],
      dest: urls.img.dist
    } ]
  }
};