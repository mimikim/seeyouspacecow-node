// file paths, relative to root
const srcPath = "app/src/";
const distPath = "public/";

const assets = [
  'error',
  'about',
  'blog',
  'contact',
  'global',
  'home',
  'portfolio',
  'portfolio-item',
  'print'
];

module.exports.paths = {
  css: {
    dist: distPath + "css/",
    src: srcPath + "scss/"
  },

  js: {
    dist: distPath + "js/",
    src: srcPath + "js/"
  },

  img: {
    dist: distPath + "img/",
    src: srcPath + "img/"
  },

  svg: {
    dist: distPath + "svg/",
    src: srcPath + "svg/"
  },

  fonts: {
    dist: distPath + "fonts/",
    src: srcPath + "fonts/"
  },
};

// returns paths for js
module.exports.returnJS = () => {
  let jsFiles = assets.filter( elm => {
    return elm !== 'print';
  });

  return jsFiles.map( ( elm ) => {
    return {
      'dist': this.paths.js.dist + elm + '.js',
      'src': this.paths.js.src + elm + '.js'
    };
  });
};

// returns css path
module.exports.returnCSS = () => {
  return assets.map( ( elm ) => {
    return {
      'dist': this.paths.css.dist + elm + '.css',
      'src': this.paths.css.src + elm + '.scss'
    };
  });
};
