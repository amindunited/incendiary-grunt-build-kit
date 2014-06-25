module.exports = {
	compile: {
		options: {
			templateName: function (sourceFile) {
				var theme = this.process.env.THEME;
				
				var newSource = sourceFile.replace('./tmp/templates/', '');

				return newSource.replace('.hbs', '');
			}
		},
		files: ['<%= paths.temporary %>/templates/**/*.hbs'],//['<%= paths.source %>/templates/<%= theme %>/**/*.hbs'],
		dest: '<%= paths.temporary %>/tmpl.min.js'

	}
}