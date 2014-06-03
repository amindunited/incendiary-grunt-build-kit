module.exports = function(grunt) {
	var grunt = grunt;
	grunt.registerTask('theme', 'The theme function', function(){
		console.log("in the theme  func ", grunt.option('theme'));
	})
}