module.exports = function(grunt) {
	var tasks = [
		'clean:build',
		'env:development', 
		'preprocess:development', 
		'transpile:app',
		'jshint',
		'less:development',
		'emberhandlebars',
		'concat_sourcemap:development',
		'copy:assets_development',
		'clean:temp'
	];

	//Append 'server' tasks if serve=true
	if (!grunt.config.data.serve) {

		console.log("|--------------------------------|");
		console.log("|------------NO SERVER!----------|");
		console.log("|--------------------------------|");

	} else {

		tasks.push('concurrent:development');
		
	}

	grunt.registerTask('default', tasks);
}