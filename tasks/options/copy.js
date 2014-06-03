module.exports = {
	images: {
		expand: true, 
		src: ['**'], 
		dest: 'images/',
		cwd: 'app/src/images/'
	},
	deploy: {
		expand: true,
		files: [ 
			{
				src: ['app/**', 'js/**', 'images/**', 'css/**'], 
				dest: 'deploy/'
			},
			{
				expand: true, 
				flatten: true, 
				src: ['app/index.php'],
				dest: 'deploy/'
			}

		]
	}
}