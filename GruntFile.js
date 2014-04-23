'use strict';
//Gruntfile
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({


        watch: {
            frontend: {
                files: [
                    "js/custom.js",
                    "css/custom.css",
                    "./index.html"
                ],
                options: {
                    livereload: true //reloads the browser
                }
            },
            light: {
                files: [
                    "./js/custom.js",
                    "./css/custom.css",
                    "./index.html"
                ],

                options: {
                    livereload: true //reloads the browser
                }
            },

        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '*'
            },
            livereload: {
                options: {
                    open: true,
                    base: "./"
                }
            }
        }



    });

    // Register the serve task
    grunt.registerTask('serve', function(target) {
        grunt.task.run([
            'connect:livereload',
            'watch:light'
        ]);
    });


    // Task definition
    // grunt.registerTask('default', ['connect:livereload', 'watch']);
    grunt.registerTask('default', function(target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
};