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
		testem_results: 'testem_results.js',//The file that thfe test results will be written to
		serve: true,//Set this to false to prevent server from running, and browser being opened
		server_hostname: '127.0.0.1', // Setting it to '*' will make the server accessible from anywhere.
		auto_open: true,// set to false to prevent grunt tasks from launching browser (will not run when serve=false)
		watch: true,// set to false to prevent watch rebuild script running (will not run when serve=false)
		/* The Ports that will be used to serve resulting builds */
		ports: {
			development: 9000,
			staging: 9001,
			production: 9002,
			testing: 9003
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
			documentation: 'docs',//output directory for documentation
			ember_modules: 'pods',//path to add to ember modules in the es6 transpiler (for ember resolver)
			images: 'img',
			assets: 'assets'//Folder that contains images / fonts etc...
		},
		//Additional style sheets to prepend to lesscss' output
		// ** NOTE any *.css files under your application directory will be automatically added
		stylesheets: {
			common:[],
			test: ['./bower_components/qunit/qunit/qunit.css']
		},
		//Additional libraries for concatination (not processed as es6)
		libs: {
			development:[
				'./lib/loader.js',
				'./lib/ember-resolver.js',
				'./lib/animation-helpers.js'
			],
			staging:[
				'./lib/loader.js',
				'./lib/ember-resolver.js',
				'./lib/animation-helpers.js'
			],
			production:[
				'./lib/loader.js',
				'./lib/ember-resolver.js',
				'./lib/animation-helpers.js'
			],
			testing: [
				'./bower_components/qunit/qunit/qunit.js',
				'./lib/test-helpers.js',
				'./lib/test-loader.js'
			]//NOTE testing will also load the development libs
		},
		//The Bower Libraries for use with each build (not processed as es6)
		vendorLibs: {
			development: [
				'./bower_components/jquery/jquery.js',
				'./bower_components/handlebars/handlebars.js',
				'./bower_components/ember/ember.js',
				'./bower_components/ember-model/ember-model.js',
				'./bower_components/ember-animate/ember-animate.js'
			],
			staging: [
				'./bower_components/jquery/jquery.min.js',
				'./bower_components/handlebars/handlebars.min.js',
				'./bower_components/ember/ember.min.js',
				'./bower_components/ember-model/ember-model.js',
				'./bower_components/ember-animate/ember-animate.js'
			],
			production: [
				'./bower_components/jquery/jquery.min.js',
				'./bower_components/handlebars/handlebars.min.js',
				'./bower_components/ember/ember.prod.js',
				'./bower_components/ember-model/ember-model.js',
				'./bower_components/ember-animate/ember-animate.js'
			],
		}
	};


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
	 * Merge the config object (above) with the project specific config
	 */
	grunt.util._.extend(config, grunt.file.readJSON('project.config.json'));


	/* 
	 * Extend config
	 * Merge the config object (above) with the local config
	 */
	grunt.util._.extend(config, grunt.file.readJSON('local.config.json'));

	/* 
	 * Extend config
	 * Merge the config object (above) with the output
	 * of the loadConfig function (also above)
	 */
	grunt.util._.extend(config, loadConfig('./tasks/options/'));


	//Override default theme in config, if one was passed
	config.theme = grunt.option('theme') || 'default';

	//Override the serve option if flag is passed
	config.serve = grunt.option('serve') || config.serve;

	/*
	 * Standard initConfig
	 */
	grunt.initConfig(config);

	/* Load Tasks
	 * Loads all the *.js in the 'tasks' folder
	 */
	grunt.loadTasks('tasks');

}

