require("pods/app");//may not be necessary
// TODO: load based on params
Ember.keys(requirejs.entries).forEach(function(entry) {
  if ((/\-test/).test(entry)) {
    require(entry, null, null, true);
  }
});
