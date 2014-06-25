module.exports = function(grunt) {

	var tasks = [
		'copy:templates',
		'test_runner',
		'copy:test_results_staging',
		'env:staging',
		'preprocess:staging', 
		'transpile:app',
		'jshint',
		'less:staging',
		'emberhandlebars',
		'copy:assets_staging',
		'uglify:staging',
		'yuidoc'
	];

	//Append 'server' tasks if serve=true
	if (!grunt.config.data.serve) {

		console.log("|--------------------------------|");
		console.log("|------------NO SERVER!----------|");
		console.log("|--------------------------------|");

	} else {

		tasks.push('concurrent:staging');
		
	}



	grunt.registerTask('staging', tasks);
}