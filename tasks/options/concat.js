module.exports = {
	development: {
		src: [
			'<%= paths.source %>/vendor/jquery/jquery.min.js',
			'<%= paths.source %>/vendor/handlebars/handlebars.js',
			'<%= paths.source %>/vendor/ember/ember.min.js',
			'<%= paths.temporary %>/transpiled/**/*.js'
		],
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/js/app.js'
	},
	staging: {
		src: [
			'<%= paths.source %>/vendor/jquery/jquery.min.js',
			'<%= paths.source %>/vendor/handlebars/handlebars.js',
			'<%= paths.source %>/vendor/ember/ember.min.js',
			'<%= paths.temporary %>/transpiled/**/*.js'
		],
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/js/app.js'
	},
	production: {
		src: [
			'<%= paths.source %>/vendor/jquery/jquery.min.js',
			'<%= paths.source %>/vendor/handlebars/handlebars.js',
			'<%= paths.source %>/vendor/ember/ember.min.js',
			'<%= paths.temporary %>/transpiled/**/*.js'
		],
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/js/app.js'
	}
}