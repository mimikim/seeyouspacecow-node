const tasks = [
  'babel',
  'concat',
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
  grunt.registerTask( 'javascript', [ 'concat', 'babel', 'uglify' ] );
  grunt.registerTask( 'images', [ 'svgmin' ] );

  grunt.registerTask( 'default', [ 'css', 'javascript', 'images' ] );
};
