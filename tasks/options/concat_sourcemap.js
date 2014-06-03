module.exports = {
	development: {
		options: {
			sourcesContent: true
		},
		files: {
			'<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/js/app.js': [
				'<%= vendorLibs.development %>',
				'<%= environmental_configuration.development %>',
				'./lib/loader.js',
				'./lib/ember-resolver.js',
				'<%= emberhandlebars.compile.dest %>',
				'<%= paths.temporary %>/transpiled/**/*.js',
				'!<%= paths.temporary %>/transpiled/tests/**/*.js'
			]
		},
	},

	test: {
		options: {
			sourcesContent: true
		},
		files: {
			'<%= paths.temporary %>/tests/js/app.js': [
				'<%= vendorLibs.development %>',
			    '<%= environmental_configuration.development %>',
				'./lib/loader.js',
				'./lib/ember-resolver.js',
				'<%= emberhandlebars.compile.dest %>',
				'<%= paths.temporary %>/transpiled/**/*.js',
				'./bower_components/qunit/qunit/qunit.js',
				'./lib/test-loader.js'
			]
		},
	},

	staging: {
		options: {
			sourcesContent: true
		},
		files: {
			'<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/js/app.js': [
				'<%= vendorLibs.production %>',
			    '<%= environmental_configuration.staging %>',
				'./lib/loader.js',
				'./lib/ember-resolver.js',
				'<%= emberhandlebars.compile.dest %>',
				'<%= paths.temporary %>/transpiled/**/*.js',
				'!<%= paths.temporary %>/transpiled/tests/**/*.js'
			]
		},
	},
}