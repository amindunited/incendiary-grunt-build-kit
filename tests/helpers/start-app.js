import App from 'pods/app';
import Router from 'pods/router';

function startApp(attrs) {
  var Application;

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
    Application = App.create(attributes);
    Application.setupForTesting();
    Application.injectTestHelpers();
  });

  Application.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return Application;
}

export default startApp;
