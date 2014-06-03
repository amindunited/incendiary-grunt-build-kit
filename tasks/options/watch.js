module.exports =  {

    options: {
    	livereload: {
        	port: 9008
    	}
    },

	js: {
		files: ['<%= paths.source %>/**/*.js', '!<%= paths.source %>/vendor/**/*.js'],
		tasks: ['transpile:app']
	},
	
	less: {
		files: 'app/less/**/*.less',
		tasks: ['less:development']
	},

	// core: {
	// 	files: 'app/libs/**/*.js',
	// 	tasks: ['uglify:jsLibs_dev']
	// },

	// app: {
	// 	files: 'app/src/**/*.js',
	// 	tasks: ['uglify:app_dev']
	// },

	// templates: {
	// 	files: 'app/src/**/*.hbs',
	// 	tasks: ['emberTemplates']
	// },

	// less_server: {
	// 	files: ['css/index.css', 'js/libs.js', 'js/index.js', 'js/templates.js'],
	// 	options: {
	// 		livereload: {
	// 			port: 8999
	// 		}
	// 	}
	// }
};