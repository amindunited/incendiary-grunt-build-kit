var test = window.test;

test('a very simple example test to verify testem', function() {
    equal(1, 1, "some failure message");
});

test('a very simple example test to verify testem', function() {
    equal(1, 1, "some failure message");
});

test('Visit Index ', function(){
	visit('/');
	equal(1, 1, App);
});