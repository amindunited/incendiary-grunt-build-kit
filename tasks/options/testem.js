module.exports = {
	options: {
		launch_in_dev : ['PhantomJS']
	},
	main: {
		src: ['testem.json'],
		report_file: '<%= paths.temporary %>/tests/<%= testem_results %>'
	}
}