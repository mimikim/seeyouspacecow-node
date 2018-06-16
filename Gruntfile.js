const tasks = [
  'babel',
  'concat',
  'imagemin',
  'postcss',
  'sass',
  'svgmin',
  'uglify',
  'watch'
];

module.exports = function(grunt) {
  require( 'load-grunt-tasks' )( grunt );
  grunt.initConfig( require('./grunt')(tasks) );

  grunt.registerTask( 'css', [ 'sass', 'postcss' ] );
  grunt.registerTask( 'js', [ 'concat', 'babel', 'uglify' ] );
  grunt.registerTask( 'img', [ 'imagemin', 'svgmin' ] );
  grunt.registerTask( 'default', [ 'img', 'css', 'js' ] );
};
