//test_runner.js
module.exports = function(grunt) {
	grunt.registerTask('test_runner', [
		'env:development',
		'copy:templates',
		'preprocess:development',
		'transpile:app',
		'transpile:tests',
		'jshint',
		'less:test',
		'emberhandlebars',
		'preprocess:test',
		'concat_sourcemap:test',
		'copy:assets_development',
		'testem'
		]
	);
}