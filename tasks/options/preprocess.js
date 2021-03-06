module.exports = {

    development : {

        src : '<%= paths.source %>/index.html',
        dest : '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/index.html',
        options : {

            context : {
                name : '<%= pkg.name %>',
                version : '<%= pkg.version %>',
                now : '<%= now %>',
                ver : '<%= ver %>',
                testVersion: 'false'
            }

        }

    },
    android_development : {

        src : '<%= paths.source %>/index.html',
        dest : 'cordova/www/index.html',
        options : {

            context : {
                name : '<%= pkg.name %>',
                version : '<%= pkg.version %>',
                now : '<%= now %>',
                ver : '<%= ver %>',
                testVersion: 'false'
            }

        }

    },
    test : {

        src : '<%= paths.source %>/index.html',
        dest : '<%= paths.temporary %>/tests/index.html',
        options : {

            context : {
                name : '<%= pkg.name %>',
                version : '<%= pkg.version %>',
                now : '<%= now %>',
                ver : '<%= ver %>',
                testVersion: 'true'
            }

        }

    },

    staging : {

        src : '<%= paths.source %>/index.html',
        dest : '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/index.html',
        options : {

            context : {
                name : '<%= pkg.name %>',
                version : '<%= pkg.version %>',
                now : '<%= now %>',
                ver : '<%= ver %>',
                testVersion: 'false'
            }

        }

    },

    production : {

        src : '<%= paths.source %>/index.html',
        dest : '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/index.html',
        options : {

            context : {
                name : '<%= pkg.name %>',
                version : '<%= pkg.version %>',
                now : '<%= now %>',
                ver : '<%= ver %>',
                testVersion: 'false'
            }

        }

    }

}