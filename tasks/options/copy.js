module.exports = {
	templates: {
		files: [{
			fileNames: [],
			modPath: '<%= paths.ember_modules %>',
			appBasePath: '<%= paths.source %>',
			theme: '<%= theme %>',
			expand: true,
			src: ['<%= paths.source %>/**/*.hbs'],
			dest: '<%= paths.temporary %>/templates/',
			rename: function(dest, src) {
				
				var themePath = 'templates/' + this.theme + '/'
				
				src = src.replace(this.appBasePath, '');
				src = src.replace(themePath, '');
				src = src.replace('modules/', '');
				
				return dest + src;
			},
			filter: function(filename) {

				var fs = require('fs');
				
				
				var appBasePath = this.appBasePath.replace('./', '');
				var theme = this.theme;
				
				var themePath = 'templates/' + this.theme + '/';
				var baseFileName;
				
				var baseFileName = filename.replace('./', '');
				baseFileName = baseFileName.replace(appBasePath, '');
				baseFileName = baseFileName.replace(themePath, '');


				//Check for themed version

				//if the file is NOT in the templates folder, then it is a default template
				if (!filename.match(/templates\//)) {
					
					//if a themed version exists ...return false
					var themedPath = appBasePath+'templates/'+this.theme+'/'+baseFileName;
					if (fs.existsSync(themedPath)) {

					    return false;

					}

				}
				//else if the file is in the default theme folder, and the current theme is not default...
				else if (filename.match(/templates\/default/) && theme !== 'default') {
					
					//if a themed version exists ...return false
					baseFileName = baseFileName.replace(/templates\/default\//, '');

					var themedPath = appBasePath+'templates/'+this.theme+'/'+baseFileName;
					
					if (fs.existsSync(themedPath)) {
					    
					    return false;

					}
				}
					

				//else if it's in a theme folder that is not the current theme...
				else if (!filename.match(theme)) {
					// Not the right theme...return false
					return false;
				}

				return true;
			}
		}]
	},
	test_results_development: {
		expand: true, 
		src: ['**'],
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/tests/',
		cwd: '<%= paths.temporary %>/tests/'
	},
	test_results_staging: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/tests/',
		cwd: '<%= paths.temporary %>/tests/'
	},
	test_results_production: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/tests/',
		cwd: '<%= paths.temporary %>/tests/'
	},
	images_development: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/<%= paths.images %>',
		cwd: '<%= paths.source %>/<%= paths.images %>/'
	},
	images_staging: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/<%= paths.images %>',
		cwd: '<%= paths.source %>/<%= paths.images %>/'
	},
	images_production: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/<%= paths.images %>',
		cwd: '<%= paths.source %>/<%= paths.images %>/'
	},

	assets_development: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/<%= paths.assets %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	},
	assets_staging: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/<%= paths.assets %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	},
	assets_production: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/<%= paths.assets %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	},

	assets_ios_development: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.temporary %>/<%= theme %>/ios/<%= paths.development %>/<%= paths.assets %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	},


	assets_android_development: {
		expand: true, 
		src: ['**'], 
		dest: '<%= paths.temporary %>/<%= theme %>/android/<%= paths.development %>/<%= paths.assets %>',
		cwd: '<%= paths.source %>/<%= paths.assets %>/'
	}
}
