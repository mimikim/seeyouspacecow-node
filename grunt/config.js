// file paths, relative to root
const srcPath = "app/src/";
const distPath = "public/";

const pages = [
  'about',
  'blog',
  'contact',
  'global',
  'home',
  'portfolio',
  'portfolio-item'
];

module.exports = {
  srcPath,
  distPath,
  pages,

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
  }
};
