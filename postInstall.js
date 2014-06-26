console.log('Running Post Install');

var sys = require('sys');
var fs = require('fs');
var Handlebars = require('handlebars');

var child_process = require('child_process');
var exec = require('child_process').exec;

var cordova_config;
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
		"file": "cordova.config.json",
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


var runCMD = function(cmdStr, options, callback){
	
	var cmd = child_process.spawn(cmdStr, options, { stdio: 'inherit' }).on('close', function (code) {
	  console.log(cmdStr + ' exited with code ' + code);
	  callback();
	});;

};


/* SOF cordova set up */

var cordovaConfigComplete = function(){
	//change working directory back to rproject root (from cordova/)
	process.chdir('../');
}

var cordovaAddPlugins = function() {
	var plugins_config = cordova_config.plugins;
	var plugins = [];
	var callbackArray = [];
	
	//Remove disabled plugins from list
	for (var i = 0; i < plugins_config.length; i++) {
		if (plugins_config[i].add) {
			plugins.push(plugins_config[i].registry);
		}
	}
	
	var loadNextCordovaPlugin = function(index){
		runCMD("cordova",  ['plugin', 'add', plugins[index]], function(){
			if ((plugins.length - 1) > index) {
				loadNextCordovaPlugin(index+1);
			} else {
				cordovaConfigComplete();
			}

		});
	};

	loadNextCordovaPlugin(0);
	
};

var cordovaAddPlatforms = function() {

	process.chdir('./cordova');

	runCMD("cordova",  ['platforms', 'add', 'android'], function(){
		if (process.platform === 'darwin') {
			runCMD("cordova",  ['platforms', 'add', 'ios'], function(){
				cordovaAddPlugins();
			});
		} else {
			cordovaAddPlugins();
		}
	});

};

var cordovaCreate = function () {
	
	cordova_config = require('./cordova.config.json');
	
	if ( !cordova_config.enable ) {
		console.log("Cordova Has been disabled for this project");
		return;
	}

	runCMD("cordova",  ['create', 'cordova', 'com.luxbet.app', 'Luxbet'], cordovaAddPlatforms);
};

/* EOF cordova set up */



/* SOF Run Bower install */

runCMD("bower",  ["install"], cordovaCreate);

/* EOF Run Bower install */






function onErr(err) {
	console.log("Error Details: ", err);
	return 1;
}