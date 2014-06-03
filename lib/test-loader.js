require("clcm/app");
console.log('loader....');
/*
Ember.keys(requirejs._eak_seen).filter(function(key) {
  return (/tests/).test(key);
}).forEach(function(moduleName) {
	console.log("................foreaching ", moduleName);
  require(moduleName, null, null, true);
});
*/
// TODO: load based on params
Ember.keys(requirejs.entries).forEach(function(entry) {
  if ((/tests/).test(entry)) {
  	console.log('test loader', entry);
    require(entry, null, null, true);
  }
});