module.exports = function(grunt) {
	grunt.registerTask('test', [
		'clean:build',
		'env:development',
		'preprocess:development',
		'transpile:app',
		'transpile:tests',
		'jshint',
		'less:test',
		'emberhandlebars',
		'preprocess:test',
		'concat_sourcemap:test',
		'copy:images_development',
		'testem',
		'clean:temp'
		]
	);
}