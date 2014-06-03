module.exports =  {

    options: {
    	livereload: {
        	port: 9008
    	}
    },

	hbs: {
		files: ['<%= paths.source %>/**/*.hbs'],
		tasks: ['clean:build',
			'env:development', 
			'preprocess:development', 
			'transpile:app',
			'jshint',
			'less:development',
			'emberhandlebars',
			'concat_sourcemap:development',
			'copy:images_development',
			'clean:temp'
		]
	},

	js: {
		files: ['<%= paths.source %>/**/*.js', '!<%= paths.source %>/vendor/**/*.js'],
		tasks: ['clean:build',
			'env:development', 
			'preprocess:development', 
			'transpile:app',
			'jshint',
			'less:development',
			'emberhandlebars',
			'concat_sourcemap:development',
			'copy:images_development',
			'clean:temp'
		]
	},
	
	less: {
		files: 'app/less/**/*.less',
		tasks: ['clean:build',
			'env:development', 
			'preprocess:development', 
			'transpile:app',
			'jshint',
			'less:development',
			'emberhandlebars',
			'concat_sourcemap:development',
			'copy:images_development',
			'clean:temp'
		]
	}

};