module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
          'assets/css/styles.css': 'assets/css/styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['css/sass/*.scss','css/*.scss'],
        tasks: ['default'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

  // Server task
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('server', ['build','watch']);

};
