module.exports = {
	development: {
		tasks: ['connect:development', 'open:development', 'watch'],
		options: {
			logConcurrentOutput: true
		}
	},
	development_no_open: {
		tasks: ['connect:development', 'watch'],
		options: {
			logConcurrentOutput: true
		}
	},
	development_no_watch: {
		tasks: ['connect:development'],
		options: {
			logConcurrentOutput: true
		}
	},

	test: {
		tasks: ['connect:testing', 'watch', 'testem'],
		options: {
			logConcurrentOutput: true
		}
	},
	staging: {
		tasks: ['connect:staging'],
		options: {
			logConcurrentOutput: true
		}
	},
}