var App;

module('Acceptances - Component', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('component output is rendered', function(){
  expect(1);

  visit('/').then(function(){

    equal(1, 1);
    
  });
});

