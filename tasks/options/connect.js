module.exports = {

	development: {
	  options: {
		port: '<%= ports.development %>',
	  	hostname: '<%= server_hostname %>',
	  	base: '<%= paths.outputDir %>/<%= theme %>/dev',
	  	keepalive: true
	  }
	},
	
	testing: {
	  options: {
		port: '<%= ports.testing %>',
	  	hostname: '<%= server_hostname %>',
	  	base: '<%= paths.temporary %>/tests',
	  	keepalive: true
	  }
	},

	staging: {
	  options: {
		port: '<%= ports.staging %>',
	  	hostname: '<%= server_hostname %>',
	  	base: '<%= paths.outputDir %>/<%= theme %>/staging',
	  	keepalive: true
	  }
	},

	production: {
	  options: {
		port: '<%= ports.production %>',
	  	hostname: '<%= server_hostname %>',
	  	base: '<%= paths.outputDir %>/<%= theme %>/production',
	  	keepalive: true
	  }
	}
}