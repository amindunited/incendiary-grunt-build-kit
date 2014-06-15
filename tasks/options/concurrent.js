module.exports = {
	development: {
		tasks: ['connect:development', 'open:development', 'watch'],
		options: {
			logConcurrentOutput: true
		}
	},

	test: {
		tasks: ['connect:testing', 'open:testing', 'watch', 'testem'],
		options: {
			logConcurrentOutput: true
		}
	},
	staging: {
		tasks: ['connect:staging', 'open:staging'],
		options: {
			logConcurrentOutput: true
		}
	},
}