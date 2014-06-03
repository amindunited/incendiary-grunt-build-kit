module.exports = {
	options : {

	},
	development: {
		NODE_ENV: 'DEVELOPMENT',
		THEME: '<%= theme %>'
	},
	test: {
		NODE_ENV: 'TESTING',
		THEME: '<%= theme %>'
	},
	staging: {
		NODE_ENV: 'STAGING',
		THEME: '<%= theme %>'
	},
	production: {
		NODE_ENV: 'PRODUCTION',
		THEME: '<%= theme %>'
	}
}