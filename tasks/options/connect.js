module.exports = {

	development: {
	  options: {
		port: '<%= ports.development %>',
	  	hostname: '127.0.0.1', // Remove this line if you only want the server available locally
	  	base: '<%= paths.outputDir %>/<%= theme %>/dev',
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
	},
/*
	server: {
		options: {
			port: 9000,
			hostname: '*', // Remove this line if you only want the server available locally
			base: 'development',
			keepalive: true,
			/*
			middleware: function(connect, options) {
				return [
					require('connect-livereload')({
						port: config.watch.public.options.livereload
					}),
					connect.static(options.base)
				];
			}
			* /
		}
	},
*/
}