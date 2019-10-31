const svg = require('../config').paths.svg;

module.exports = {
  options: {
    plugins: [
      { cleanupIDs: false },
      { removeViewBox: false },
      { removeUselessStrokeAndFill: true }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: svg.src,
        src: [ '*.svg' ],
        dest: svg.dist
      }
    ]
  }
};
