module.exports = {
	test_results_development: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/tests/',
		cwd: '<%= paths.tmp %>/tests/'
	},
	test_results_staging: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/tests/',
		cwd: '<%= paths.temporary %>/tests/'
	},
	test_results_production: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/tests/',
		cwd: '<%= paths.tmp %>/tests/'
	},
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
	},

	assets_development: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/<%= paths.assests %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	},
	assets_staging: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/<%= paths.assets %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	},
	assets_production: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/<%= paths.assets %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	}
}