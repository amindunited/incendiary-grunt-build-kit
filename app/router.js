var Router = Ember.Router.extend();

Router.map(function () {
	this.resource('login', {path: '/login'}, function () {
	});

	this.resource('settings', {path: '/settings'}, function () {
	});
});

export default Router;
