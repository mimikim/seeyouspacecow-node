// helper functions

const urls = require('../config');

module.exports = {
  // returns paths for js
  returnJS() {
    return urls.pages.map( ( elm ) => {
      return {
        'dist': urls.js.dist + elm + '.js',
        'src': urls.js.src + elm + '.js'
      };
    });
  },

  // returns css path
  returnCSS() {
    return urls.pages.map( ( elm ) => {
      return {
        'dist': urls.css.dist + elm + '.css',
        'src': urls.css.src + elm + '.scss'
      };
    });
  }
};
