import App from 'pods/app';
import Router from 'pods/router';

function startApp(attrs) {
  //var App;

  var attributes = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false
  }, attrs); // but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    App = App.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
    console.log('in the start app run ', App);
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}

export default startApp;