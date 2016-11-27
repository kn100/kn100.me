// Gruntfile.js
module.exports = function(grunt) {
    pkg: grunt.file.readJSON('package.json'),
    grunt.initConfig({
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['css/*.css'],
                tasks: ['concat', 'cssmin']
            },
            js: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify']
            },
            html: {
                files: ['*.html', 'templates/*.tmpl'],
                tasks: ['processhtml']
            },
            img: {
                files: ['img/*'],
                tasks: ['copy']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'app/',
                    hostname: '0.0.0.0',
                    protocol: 'http',
                    livereload: true,
                    open: true,
                }
            }
        },
        processhtml: {
            options: {
                process: true
            },
            app: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'app/',
                    ext: '.html'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/css/',
                    src: ['app.css', '!*.min.css'],
                    dest: 'app/css/',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            js: {
                src: 'js/*.js',
                dest: 'app/js/app.js',
            },
            css: {
                src: 'css/*.css',
                dest: 'app/css/app.css'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'app/js/app.min.js': ['app/js/app.js']
                },
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['img/*'],
                    dest: 'app/'
                }],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-template');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.registerTask('magibuild', ['concat', 'cssmin', 'uglify', 'copy', 'processhtml']);
    grunt.registerTask('server', ['magibuild', 'connect', 'watch']);
};
