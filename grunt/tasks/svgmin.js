const url = require('../config');
module.exports = {
  options: {
    plugins: [
      { removeViewBox: false },
      { removeUselessStrokeAndFill: true }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: url.svg.src,
        src: [ '*.svg' ],
        dest: url.svg.dist
      }
    ]
  }
};
