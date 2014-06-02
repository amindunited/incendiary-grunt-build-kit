incendiary-grunt-build-kit
==========================

An Grunt based application build kit for apps using Emberjs and Lesscss

Incendiary-grunt-build-kit is the file structure Grunt config that I have put together for my own projects.

## Files

#### Gruntfile.js - The file with the basic grunt configuration:

Most of the config options can be edited:

```
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
		ember_modules: 'clcm'//path to add to ember modules in the es6 transpiler (for ember resolver)
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
```
** Note the 'app' directory must be 'app', as it is hard coded in the template, and transpile tasks for now.

### bower.json - Bower configuration file.

If you are unfamiliar with bower, have a look at [bower.io](http://bower.io/)

New components can be added using:
```
bower install 'component_name' --save
```
or
```
bower install 'component_name' --save-dev
```

Make sure to update you project's name and version

```
"name": "my-bower-configuration",//Change this to your project name
"version": "0.0.1",//Change this to your current project version
```
