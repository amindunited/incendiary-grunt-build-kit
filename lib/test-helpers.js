//test-helpers.js
///////////////////////////////////////////////////////////
/*
App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

// Run before each test case.
QUnit.testStart(function () {
    // Put the application into a known state, and destroy the defaultStore.
    // Be careful about DS.Model instances stored in App; they'll be invalid
    // after this.
    // This is broken in some versions of Ember and Ember Data, see:
    // https://github.com/emberjs/data/issues/847
    Ember.run(function () { App.reset(); });
    // Display an error if asynchronous operations are queued outside of
    // Ember.run.  You need this if you want to stay sane.
    Ember.testing = true;
});

// Run after each test case.
QUnit.testDone(function () {
    Ember.testing = false;
});
*/
///////////////////////////////////////////////////////////

window.hmm = "HA";
document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

var resolver = require('pods/tests/helpers/resolver')['default'];
//var resolver = require('ember/resolver')['default'];
require('ember-qunit').setResolver(resolver);


window.startApp          = require('pods/tests/helpers/start-app')['default'];
window.isolatedContainer = require('ember-qunit/isolated-container')['default'];

function exists(selector, context) {
  return !!find(selector, context).length;
}

function getAssertionMessage(actual, expected, message) {
  return message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
}

function equal(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.equal.call(this, actual, expected, message);
}

function strictEqual(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.strictEqual.call(this, actual, expected, message);
}

window.exists = exists;
window.equal = equal;
window.strictEqual = strictEqual;