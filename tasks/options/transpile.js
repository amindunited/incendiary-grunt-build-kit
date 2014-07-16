module.exports = {
	tests: {
		type: 'amd',
		moduleName: function (path, opts) {
			console.log('returning test path', opts.orig.modPath + '/tests/' + path);
			return opts.orig.modPath + '/tests/' + path;
		},
		files: [
			{
				expand: true,
				cwd: 'tests/',
				src: ['**/*.js', '!config/**/*'],
				dest: '<%= paths.temporary %>/transpiled/tests/',
				modPath: '<%= paths.ember_modules %>'
			}
		]
	},
	app: {
		type: 'amd',
		moduleName: function (path, opts) {
			return opts.orig.modPath + path;
		},
		files: [
			{
				expand: true,
				cwd: 'app',//Setting this to <%= paths.src %> creates module naming issues
				src: ['**/*.js', '!<%= paths.config %>', '!**templates/**', '!**helpers/**'],
				dest: '<%= paths.temporary %>/transpiled/app',
				modPath: '<%= paths.ember_modules %>'
			}
		]
	}
}
