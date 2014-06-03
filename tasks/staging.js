module.exports = function(grunt) {
	grunt.registerTask('staging', [
		'clean:build',
		'env:staging', 
		'preprocess:staging', 
		'transpile:app',
		'jshint',
		'less:staging',
		'emberhandlebars',
		'copy:images_staging',
		'uglify:staging',
		'clean:temp',
		'concurrent:staging'
		]
	);
}