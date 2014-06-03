module.exports = function(grunt) {
	grunt.registerTask('production', [
		'clean:build',
		'env:production', 
		'preprocess:production', 
		'transpile:app',
		'jshint',
		'less:production',
		'emberhandlebars',
		'clean:temp'
	])
}