module.exports = function(grunt) {

	grunt.registerTask('production', [
		'clean:build',
		'env:production', 
		'preprocess:production', 
		'transpile:app',
		'jshint',
		'less:production',
		'copy:assets_production',
		'emberhandlebars',
		'clean:temp'
	]);
}