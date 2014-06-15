module.exports = {

	development: {
	  options: {
		port: '<%= ports.development %>',
	  	hostname: '127.0.0.1', // Remove this line if you only want the server available locally
	  	base: '<%= paths.outputDir %>/<%= theme %>/dev',
	  	keepalive: true
	  }
	},
	
	testing: {
	  options: {
		port: '<%= ports.testing %>',
	  	hostname: '127.0.0.1', // Remove this line if you only want the server available locally
	  	base: '<%= paths.temporary %>/tests',
	  	keepalive: true
	  }
	},

	staging: {
	  options: {
		port: '<%= ports.staging %>',
	  	hostname: '127.0.0.1', // Remove this line if you only want the server available locally
	  	base: '<%= paths.outputDir %>/<%= theme %>/staging',
	  	keepalive: true
	  }
	},

	production: {
	  options: {
		port: '<%= ports.production %>',
	  	hostname: '127.0.0.1', // Remove this line if you only want the server available locally
	  	base: '<%= paths.outputDir %>/<%= theme %>/production',
	  	keepalive: true
	  }
	}
}