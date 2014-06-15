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
    }
}