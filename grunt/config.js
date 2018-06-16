// file paths, relative to root
const srcPath = "app/src/";
const distPath = "public/";

// all js files
const jsfiles = [{
  src: [
    srcPath + "js/" + 'navigation.js',
    srcPath + "js/" + 'helpers.js',
  ],
  filename: 'general'
  }, {
    src: [
      srcPath + "js/" + 'frontpage/cow-animation.js',
      srcPath + "js/" + 'frontpage/badge-animation.js',
      srcPath + "js/" + 'frontpage/slider.js',
    ],
    filename: 'frontpage'
  }, {
    src: [
      srcPath + "js/" + 'portfolio.js'
    ],
    filename: 'portfolio'
  },
];

module.exports = {
  srcPath,
  distPath,

  css: {
    src: srcPath + "scss/",
    dist: distPath + "css/"
  },

  js: {
    src: jsfiles,
    dist: distPath + "js/"
  },

  image: {
    src: srcPath + "images/",
    dist: distPath + "images/"
  },

  svg: {
    src: srcPath + "svg/",
    dist: distPath + "svg/"
  },

  fonts: {
    src: srcPath + "fonts/",
    dist: distPath + "fonts/"
  }
};
