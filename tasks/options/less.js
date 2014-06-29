
module.exports = {
	development: {
		options: {
			paths: ["<%= paths.source %>/less/<%= theme %>/"],
			sourceMap: true,
			sourceMapFilename: '<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/css/index.css.map',
			sourceMapURL: 'index.css.map',
			sourceMapRootpath: '',
			outputSourceFiles: true
		},
		files: {
			"<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/css/index.css": ["<%= stylesheets.common %>", "<%= paths.source %>**/*.css", "<%= paths.source %>/less/<%= theme %>/style.less"]
		}
	},
	android_development: {
		options: {
			paths: ["<%= paths.source %>/less/<%= theme %>/"],
			sourceMap: true,
			sourceMapFilename: './cordova/www/css/app.css.map',
			sourceMapURL: 'app.css.map',
			sourceMapRootpath: '',
			outputSourceFiles: true
		},
		files: {
			"./cordova/www/css/app.css": ["<%= stylesheets.common %>", "<%= paths.source %>**/*.css", "<%= paths.source %>/less/<%= theme %>/style.less"]
		}
	},
	test: {
		options: {
			paths: ["<%= paths.temporary %>/tests/css/"],
			sourceMap: true,
			sourceMapFilename: '<%= paths.temporary %>/tests/css/index.css.map',
			sourceMapURL: 'index.css.map',
			sourceMapRootpath: '',
			outputSourceFiles: true
		},
		files: {
			"<%= paths.temporary %>/tests/css/index.css": ["<%= stylesheets.test %>",  "<%= stylesheets.common %>", "<%= paths.source %>**/*.css", "<%= paths.source %>/less/<%= theme %>/style.less"]
		}
	},
	staging: {
		options: {
			paths: ["<%= paths.source %>/less/<%= theme %>/"],
			sourceMap: true,
			sourceMapFilename: '<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/css/index.css.map',
			sourceMapURL: 'index.css.map',
			sourceMapRootpath: '',
			outputSourceFiles: true,
			compress: true
		},
		files: {
			"<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/css/index.css": ["<%= stylesheets.common %>", "<%= paths.source %>**/*.css", "<%= paths.source %>/less/<%= theme %>/style.less"]
		}
	},
	production: {
		options: {
			paths: ["<%= paths.source %>/less/<%= theme %>/"],
			sourceMap: true,
			sourceMapFilename: '<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/css/index.css.map',
			sourceMapURL: 'index.css.map',
			sourceMapRootpath: '',
			outputSourceFiles: true,
			compress: true
		},
		files: {
			"<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/css/index.css": ["<%= stylesheets.common %>", "<%= paths.source %>**/*.css", "<%= paths.source %>/less/<%= theme %>/style.less"]
		}
	}
}