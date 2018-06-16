module.exports = {
  css: {
    files: ['app/src/scss/**'],
    tasks: ['css']
  },
  js: {
    files: [ 'app/src/js/**' ],
    tasks: [ 'js' ]
  },
  svg: {
    files: [ 'app/src/svg/**' ],
    tasks: [ 'svgmin', 'postcss' ]
  },
  img: {
    files: [ 'app/src/img/**' ],
    tasks: [ 'imagemin' ]
  }
};
