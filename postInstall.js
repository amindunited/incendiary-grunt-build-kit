console.log('Running Post Install');

var sys = require('sys');
var fs = require('fs');
var Handlebars = require('handlebars');

var child_process = require('child_process');
var exec = require('child_process').exec;


var projectConfig;
var localConfig;
var applicationFile;

/* SOF Copy Missing Default Files */
var defaultFilesTemplates = [
	{
		"file": "local.config.json",
		"src_dir": "./post_install_files/",
		"dest_dir": "./",
	},
	{
		"file": "project.config.json",
		"src_dir": "./post_install_files/",
		"dest_dir": "./",
	},
	{
		"file": ".hgignore",
		"src_dir": "./post_install_files/",
		"dest_dir": "./",
	}
];

function copyDefaultFiles() {

	for( var i = 0; i < defaultFilesTemplates.length; i++ ) {
		
		var src = defaultFilesTemplates[i].src_dir + defaultFilesTemplates[i].file;
		var dest = defaultFilesTemplates[i].dest_dir + defaultFilesTemplates[i].file;

		if ( !fs.existsSync(dest) ){
			
			var readStream = fs.createReadStream(src);
			
			var writeStream = readStream.pipe(
					fs.createWriteStream(dest).on('error', function(err){
						console.log('write err', err);
						onErr(err);
					})
				);
			
			// This catches any errors that happen while creating the readable stream (usually invalid names)
  			readStream.on('error', function(err) {
  				onErr(err);
  			});
		}
	}
}

copyDefaultFiles();

/* EOF Copy Missing Default Files */


/* SOF Run Bower install */

var runCMD = function(cmdStr, callback){
	
	var cmd = child_process.spawn('bower', ['install'], { stdio: 'inherit' }).on;

};

runCMD("bower install");

/* EOF Run Bower install */



function onErr(err) {
	console.log("Error Details: ", err);
	return 1;
}