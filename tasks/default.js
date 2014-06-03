module.exports = function(grunt) {
	grunt.registerTask('default', [
		'clean:build',
		'env:development', 
		'preprocess:development', 
		'transpile:app',
		'jshint',
		'less:development',
		'emberhandlebars',
		'concat_sourcemap:development',
		'copy:images_development',
		'clean:temp',
		'concurrent:development'
		]
	);
}