const urls = require( '../config' );
const destination = urls.css.dist + 'style.css';
const source = urls.css.src + '*.scss';

const options = {
  dist: {
    options: {
      style: 'compressed'
    },
    files: {}
  }
};

// set filepaths
options.dist.files[destination] = source;

module.exports = options;
