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
        files: ['assets/css/sass/**/*.scss','assets/css/*.scss'],
        tasks: ['sass']
      },
      uglify: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }
    },
    svgcss: {
      backgrounds: {
        files: {
          'assets/css/sass/_svg.scss': ['assets/img-source/*.svg']
        }
      }
    },
    uglify: {
      options: {
        compress: {}
      },
      default: {
        files: {
          'assets/dist/scripts.min.js': ['assets/js/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-svg-css');

  // Server task
  grunt.registerTask('build', ['sass', 'uglify']);
  grunt.registerTask('build-images', ['svgcss']);
  grunt.registerTask('dev', ['build','watch']);

};
