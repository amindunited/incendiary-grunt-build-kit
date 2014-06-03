module.exports = {
	development: {
		tasks: ['connect:development', 'open:development', 'watch'],
		options: {
			logConcurrentOutput: true
		}
	},

	test: {
		tasks: ['connect:development', 'open:development', 'watch', 'testem'],
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