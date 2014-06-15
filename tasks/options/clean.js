module.exports = {
	build: [
		'<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>', 
		'<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>', 
		'<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>', 
		'<%= paths.temporary %>'
		],
	temp: ['<%= paths.temporary %>']
}