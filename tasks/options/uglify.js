module.exports = {
	staging: {
		options: {
			sourceMap: 'js/app-source-map.js.map',
			sourceMappingURL: 'app-source-map.js.map',
			sourceMapIncludeSources:true
			//sourceMapRoot: '../../'
		},
		files: {
			'<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/js/app.min.js': [
				'<%= vendorLibs.production %>',
			    '<%= environmental_configuration.staging %>',
				'./lib/loader.js',
				'./lib/ember-resolver.js',
				'<%= emberhandlebars.compile.dest %>',
				'<%= paths.temporary %>/transpiled/**/*.js',
				'!<%= paths.temporary %>/transpiled/tests/**/*.js'
			]
		}
	}

}
