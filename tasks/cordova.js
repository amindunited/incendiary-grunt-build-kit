module.exports = function(grunt) {
	var tasks = [
		'clean:temp',
		'copy:templates',
		'preprocess:development', 
		'transpile:app',
		'jshint',
		'less:android_development',
		'emberhandlebars',
	];
	grunt.registerTask('cordova:android', [
		'env:android_development', 
		'clean:temp',
		'copy:templates',
		'preprocess:android_development', 
		'transpile:app',
		'jshint',
		'less:android_development',
		'emberhandlebars', 
		'concat_sourcemap:android_development', 
		'copy:assets_android_development',
		'shell:debug_android'
	]);
	grunt.registerTask('cordova:ios', [
		'env:ios_development', 
		'clean:temp',
		'copy:templates',
		'preprocess:android_development', 
		'transpile:app',
		'jshint',
		'less:android_development',
		'emberhandlebars', 
		'concat_sourcemap:ios_development', 
		'copy:assets_ios_development', 
		'shell:debug_ios'
	]);

};