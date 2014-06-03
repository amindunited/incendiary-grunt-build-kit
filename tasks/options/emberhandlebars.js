module.exports = {
	compile: {
		options: {
			templateName: function (sourceFile) {
				var theme = this.process.env.THEME;
				var newSource = sourceFile.replace('./app/templates/'+theme+'/', '');
				
				return newSource.replace('.hbs', '');
			}
		},
		files: ['<%= paths.source %>/templates/<%= theme %>/**/*.hbs'],
		dest: '<%= paths.temporary %>/tmpl.min.js',
	}
}