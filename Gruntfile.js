/*
 * Maintainable Grunt file structure based on
 *
 * http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
 */
module.exports = function(grunt) {

	/* 
	 * Instead of grunt.loadNpmTasks('...'); over and over...
	 * 
	 * Uses https://github.com/sindresorhus/load-grunt-tasks
	 * to load all grunt tasks from the package.json
	 * 		** note - this only loads tasks who's name begin with 'grunt-'
	 */
	require('load-grunt-tasks')(grunt);

	/*
	 * Basic config object
	 */
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		env: process.env,
		theme: 'default',//This will be used to set the folders for templates and less files
		//modulePrefix: 'clcm',//The prefix that will be used by the module transpiler
		/* The Ports that will be used to serve resulting builds */
		ports: {
			development: 9000,
			staging: 9001,
			production: 9002
		},
		/* Location of Build specific configuration files */
		environmental_configuration: {
			development: './config/dev/dev.js',
			staging: './config/staging/staging.js',
			production: './config/prod/prod.js',
		},
		paths: {
			source: "./app/",//directory where the editable files are
			config: "./app/config/",//directory where the environment specific files are
			outputDir: './builds',//the parent directory of the build
			development: './dev',//local build output directory
			staging: './staging',//staging build output directory
			production: './prod',//production build output directory
			temporary: './tmp',//output directory for preprocessed files
			ember_modules: 'mods',//path to add to ember modules in the es6 transpiler (for ember resolver)
			images: 'img'
		},
		vendorLibs: {
			development: [
				'./bower_components/jquery/jquery.js',
				'./bower_components/handlebars/handlebars.js',
				'./bower_components/ember/ember.js',
				'./bower_components/ember-model/ember-model.js'
			],
			staging: [
				'./bower_components/jquery/jquery.min.js',
				'./bower_components/handlebars/handlebars.min.js',
				'./bower_components/ember/ember.min.js',
				'./bower_components/ember-model/ember-model.js'
			],
			production: [
				'./bower_components/jquery/jquery.min.js',
				'./bower_components/handlebars/handlebars.min.js',
				'./bower_components/ember/ember.prod.js',
				'./bower_components/ember-model/ember-model.js'
			],
		}
	};

	//Override default theme in config, if one was passed
	config.theme = grunt.option('theme') || 'default';
	//env['theme'] = grunt.option('theme') || 'default';

	/*
	 * Loads the individual config files,
	 *  and merges the content into a single object
	 */
	function loadConfig(path) {
		var glob = require('glob');
		var object = {};
	  	var key;
	 
		glob.sync('*', {cwd: path}).forEach(function(option) {
			key = option.replace(/\.js$/,'');
			object[key] = require(path + option);
		});
	 
		return object;
	}


	/* 
	 * Extend config
	 * Merge the config object (above) with the output
	 * of the loadConfig function (also above)
	 */
	grunt.util._.extend(config, loadConfig('./tasks/options/'));

	/*
	 * Standard initConfig
	 */
	grunt.initConfig(config);

	/* Load Tasks
	 * Loads all the *.js in the 'tasks' folder
	 */
	grunt.loadTasks('tasks');

}

