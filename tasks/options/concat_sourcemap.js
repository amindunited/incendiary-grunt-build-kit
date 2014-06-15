module.exports = {
	development: {
		options: {
			sourcesContent: true
		},
		files: {
			'<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/js/app.js': [
				'<%= vendorLibs.development %>',
				'<%= environmental_configuration.development %>',
				'<%= libs.development %>',
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
				'<%= libs.development %>',
				'<%= emberhandlebars.compile.dest %>',
				'<%= paths.temporary %>/transpiled/**/*.js'
			],
			'<%= paths.temporary %>/tests/js/tests.js': [
				'<%=libs.testing %>'
			]
		},
	},

	staging: {
		options: {
			sourcesContent: true
		},
		files: {
			'<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/js/app.js': [
				'<%= vendorLibs.staging %>',
			    '<%= environmental_configuration.staging %>',
				'<%= libs.staging %>',
				'<%= emberhandlebars.compile.dest %>',
				'<%= paths.temporary %>/transpiled/**/*.js',
				'!<%= paths.temporary %>/transpiled/tests/**/*.js'
			]
		},
	},
	production: {
		options: {
			sourcesContent: true
		},
		files: {
			'<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/js/app.js': [
				'<%= vendorLibs.production %>',
			    '<%= environmental_configuration.production %>',
				'<%= libs.production %>',
				'<%= emberhandlebars.compile.dest %>',
				'<%= paths.temporary %>/transpiled/**/*.js',
				'!<%= paths.temporary %>/transpiled/tests/**/*.js'
			]
		},
	},
}