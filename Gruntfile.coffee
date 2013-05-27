tsc = "~/.typescript/bin/tsc"

module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        exec:
            compile:
                cmd: -> "#{tsc} --out compiled/src --declaration src/*.ts"
            test:
                cmd: -> "#{tsc} --out compiled/test test/*.ts"

        clean:
            type:
                src: ['compiled/**/*.js', 'compiled/*']
            build:
                src: ['build/**/*.js']

        concat:
            dist:
                src: ['compiled/src/**/*.js']
                dest: 'build/index.js'
            options:
                separator: ';'

        uglify:
            min:
                files:
                    'build/index.min.js': ['build/index.js']
            ###
            options:
                mangle:
                    expect: ['jQuery']
                sourceMap: 'build/source-map.js'
            ###

        copy:
            public:
                files: [
                        expand: true
                        cwd: 'build'
                        src: '**'
                        dest: 'public/javascript'
                    ,
                        expand: true
                        cwd: 'res'
                        src: '**'
                        dest: 'public/'
                ]

        connect:
            preview:
                options:
                    port: 9000
                    base: 'public'

        regarde:
            src:
                files: ['src/**/*.*']
                tasks: ['generate']

    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-connect'
    grunt.loadNpmTasks 'grunt-regarde'
    grunt.loadNpmTasks 'grunt-exec'

    grunt.registerTask 'compile', ['exec:compile', 'exec:test']
    grunt.registerTask 'default', ['compile']
    grunt.registerTask 'build', ['compile', 'concat', 'uglify']
    grunt.registerTask 'generate', ['compile', 'build', 'copy:public']
    grunt.registerTask 'preview', ['generate', 'connect:preview', 'regarde']

