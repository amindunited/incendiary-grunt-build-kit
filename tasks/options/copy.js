module.exports = {
	images_development: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/<%= paths.images %>',
		cwd: '<%= paths.source %>/<%= paths.images %>/'
	},
	images_staging: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/<%= paths.images %>',
		cwd: '<%= paths.source %>/<%= paths.images %>/'
	},
	images_production: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/<%= paths.images %>',
		cwd: '<%= paths.source %>/<%= paths.images %>/'
	}
}