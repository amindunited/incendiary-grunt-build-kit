require("pods/app");



// TODO: load based on params
/*
Ember.keys(requirejs.entries).forEach(function(entry) {
  if ((/tests/).test(entry)) {
  	console.log('test loader', entry);
    require(entry, null, null, true);
  }
});
*/

/*
// TODO: load based on params
Ember.keys(requirejs.entries).forEach(function(entry) {
  if ((/\-test/).test(entry)) {
    require(entry, null, null, true);
  }
});
*/

// TODO: load based on params
Ember.keys(requirejs.entries).forEach(function(entry) {
  if ((/tests/).test(entry)) {
    require(entry, null, null, true);
  }
});