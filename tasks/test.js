module.exports = function(grunt) {
	grunt.registerTask('test', [
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
		'copy:test_results_development'
		]
	);
}