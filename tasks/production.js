module.exports = function(grunt) {

	grunt.registerTask('production', [
		'clean:temp',
		'copy:templates',
		'test_runner',
		'copy:test_results_production',
		'env:production', 
		'preprocess:production', 
		'transpile:app',
		'jshint',
		'less:production',
		'copy:assets_production',
		'emberhandlebars',
		'yuidoc',
		'clean:temp'
	]);
}