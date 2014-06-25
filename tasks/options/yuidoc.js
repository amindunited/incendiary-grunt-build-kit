module.exports = {
    all: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        logo: '',
        options: {
            paths: ['<%= paths.source %>'],
            outdir: '<%= paths.outputDir %>/<%= theme %>/<%= paths.documentation %>',
            logo:''
        }
    },
    development: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        logo: '',
        options: {
            paths: ['<%= paths.source %>'],
            outdir: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/<%= paths.documentation %>',
            logo:''
        }
    },
    staging: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        logo: '',
        options: {
            paths: ['<%= paths.source %>'],
            outdir: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/<%= paths.documentation %>',
            logo:''
        }
    },
    production: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        logo: '',
        options: {
            paths: ['<%= paths.source %>'],
            outdir: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/<%= paths.documentation %>',
            logo:''
        }
    }
}