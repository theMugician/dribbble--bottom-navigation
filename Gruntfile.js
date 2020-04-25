module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/main.js'],
        dest: 'build/main.js',
      },
      css: {
        src: ['css/main.css'],
        dest: 'build/main.css',
      },      
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat'],
      },
      css: {  
        files: ['cs/**/*.css'],
        tasks: ['concat','sass'],        
      },
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'css/main.scss',
        }
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat','watch','sass']);

};
