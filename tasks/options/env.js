module.exports = {
	options : {

	},
	development: {
		NODE_ENV: 'DEVELOPMENT',
		THEME: '<%= theme %>',
		PLATFORM: 'WEB'
	},
	android_development: {
		NODE_ENV: 'DEVELOPMENT',
		THEME: '<%= theme %>',
		PLATFORM: 'ANDROID'
	},
	ios_development: {
		NODE_ENV: 'DEVELOPMENT',
		THEME: '<%= theme %>',
		PLATFORM: 'IOS'
	},
	test: {
		NODE_ENV: 'TESTING',
		THEME: '<%= theme %>',
		PLATFORM: 'WEB'
	},
	staging: {
		NODE_ENV: 'STAGING',
		THEME: '<%= theme %>',
		PLATFORM: 'WEB'
	},
	production: {
		NODE_ENV: 'PRODUCTION',
		THEME: '<%= theme %>',
		PLATFORM: 'WEB'
	}
}