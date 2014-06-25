module.exports =  {

    options: {
    	livereload: {
        	port: '<%= ports.live_reload %>'
    	}
    },

	hbs: {
		files: ['<%= paths.source %>/**/*.hbs'],
		tasks: [
			'copy:templates',
			'emberhandlebars',
			'concat_sourcemap:development'
		]
	},

	js: {
		files: ['<%= paths.source %>/**/*.js', '!<%= paths.source %>/vendor/**/*.js'],
		tasks: [
			'transpile:app',
			'jshint',
			'concat_sourcemap:development'
		]
	},
	
	less: {
		files: ['<%= paths.source %>/less/**/*.less', '<%= paths.source %>/**/*.css'],
		tasks: [
			'less:development'
		]
	},

	html: {
		files: '<%= paths.source %>/**/*.html',
		tasks: [
			'preprocess:development'
		]
	}

};