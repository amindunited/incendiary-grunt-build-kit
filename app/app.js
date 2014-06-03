import Resolver from 'ember/resolver';
//

var App = Ember.Application.extend({
	modulePrefix: 'pods',
	podModulePrefix: 'pods/modules',
	Resolver: Resolver['default'],

	LOG_TRANSITIONS: true,
	LOG_VIEW_LOOKUPS: true,
	LOG_ACTIVE_GENERATION: true,
	LOG_BINDINGS: true
});

export default App;
