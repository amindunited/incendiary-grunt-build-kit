module.exports = function(grunt) {
	var tasks = [
		'clean:temp',
		'env:development',
		'copy:templates',
		'preprocess:development', 
		'transpile:app',
		'jshint',
		'less:development',
		'emberhandlebars',
		'concat_sourcemap:development',
		'copy:assets_development',
	];

	//Append 'server' tasks if serve=true
	if (!grunt.config.data.serve) {

		console.log("|--------------------------------|");
		console.log("|------------NO SERVER!----------|");
		console.log("|--------------------------------|");

	} else {

		if (grunt.config.data.auto_open && grunt.config.data.watch) {
			
			tasks.push('concurrent:development');
		
		} else if (!grunt.config.data.auto_open && grunt.config.data.watch) {
		
			tasks.push('concurrent:development_no_open');
		
		} else {
		
			tasks.push('concurrent:development_no_watch');
		
		}
		
	}

	grunt.registerTask('default', tasks);
}