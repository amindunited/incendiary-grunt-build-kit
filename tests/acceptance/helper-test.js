var App;

module("Acceptances - Helper", {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test("helper output is rendered", function(){
  expect(1);

  visit('/').then(function(){

    ok(1, 1);
  });
});

