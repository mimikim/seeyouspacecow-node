module.exports = {
  css: {
    files: ['app/src/scss/**'],
    tasks: ['css']
  },
  js: {
    files: [ 'app/src/js/**' ],
    tasks: [ 'javascript' ]
  },
  svg: {
    files: [ 'app/src/svg/**' ],
    tasks: [ 'svgmin', 'postcss' ]
  }
};
