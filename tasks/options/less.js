
vendor_css = [];//add the path to any vendor css to this array
tests_css = ['./bower_components/qunit/qunit/qunit.css'];
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
			"<%= paths.outputDir %>/<%= theme %>/<%= paths.development %>/css/index.css": [vendor_css, "<%= paths.source %>/less/<%= theme %>/style.less"]
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
			"<%= paths.temporary %>/tests/css/index.css": [vendor_css, tests_css, "<%= paths.source %>/less/<%= theme %>/style.less"]
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
			"<%= paths.outputDir %>/<%= theme %>/<%= paths.staging %>/css/index.css": [vendor_css, "<%= paths.source %>/less/<%= theme %>/style.less"]
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
			"<%= paths.outputDir %>/<%= theme %>/<%= paths.production %>/css/index.css": [vendor_css, "<%= paths.source %>/less/<%= theme %>/style.less"]
		}
	}
}