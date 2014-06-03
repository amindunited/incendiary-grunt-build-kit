incendiary-grunt-build-kit
==========================

An Grunt based application build kit for apps using Emberjs and Lesscss

Incendiary-grunt-build-kit is the file structure Grunt config that I have put together for my own projects.

## Getting Started
```
git clone https://github.com/amindunited/incendiary-grunt-build-kit.git
cd incendiary-grunt-build-kit/
```

Edit the package.json, bower.json, and Gruntfile.js with your project details (see 'Configuration Files' below), then

```
npm install
```

## Grunt task usage

Local Development:

Running grunt will build a developer version of the project and serve it from builds/[themeName]/dev/

*- Unless configured the themeName will be 'default' so the output directory would be builds/default/dev/-*
```
grunt
```

To build a different theme set the theme flag to the theme the you would like to build
```
grunt --theme=new_theme
```

To output a version built for your staging server
```
grunt staging
```

To output a version built for your production server
```
grunt production
```

##File Structure

### app/

Most of your application's files will be in app/

Almost all of the files and folders under app/ will be transpiled using the es6 module transpiler, and as such should be written as es6 modules.

There are some exceptions though:

app/index.html - This is the html for the project it's full of templates for environment specific code

app/less - .less files

app/templates/ - handlebars templates

Also if you configure your Gruntfile so that your environmental_configuration files are in a directory in 'app/',  that directory will be skipped by the transpiler.

The same applies to your bower_components or 'vendorLibs' in the Gruntfile.

#### Application file structure
In app/
```
adapters/
assets/
components/
helpers/
initializers/
less/
modules/
	module_name/
		model.js
		view.js
		controller.js
		route.js
		module_child_name/
			model.js
			view.js
			controller.js
			route.js
mixins/
templates/
utils/
models/
views/
controllers/
routes/

```


## Configuration Files

### package.json - The project's npm configuration

Make sure you update
```
"name": "my_project_name"
"version": "0.0.0",
```

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
Be sure to update your project's info:

```
"name": "my-bower-configuration",//Change this to your project name
"version": "0.0.1",//Change this to your current project version
```


#### Gruntfile.js - The file with the basic grunt configuration:

If you are unfamiliar with grunt, have a look at [gruntjs.com](http://gruntjs.com/)

Most of the config options can be edited:

```
var config = {
	pkg: grunt.file.readJSON('package.json'),
	env: process.env,
	theme: 'default',//This will be used to set the folders for templates and less files
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
		ember_modules: 'mods'//path to add to ember modules in the es6 transpiler (for ember resolver)
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


### testem.json - Config for testem
If you are unfamiliar with testem, have a look at [testem's github page](https://github.com/airportyh/testem)
