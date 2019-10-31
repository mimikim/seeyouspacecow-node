module.exports = function(grunt) {
  require( 'load-grunt-tasks' )( grunt );
  grunt.initConfig( require('./grunt') );

  grunt.registerTask( 'css', [ 'sass', 'postcss' ] );
  grunt.registerTask( 'js', [ 'browserify', 'babel', 'uglify' ] );
  grunt.registerTask( 'img', [ 'imagemin', 'svgmin' ] );
  grunt.registerTask( 'build', [ 'img', 'css', 'js' ] );
  grunt.registerTask( 'default', [ 'css', 'js' ] );
};
