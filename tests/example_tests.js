var test = window.test;
test('a very simple example test to verify testem', function() {
    equal(1, 1, "some failure message");
});
test('a test that was made to fail', function() {
    equal(2, 1, "First failure message");
});
test('a test that was made to fail', function() {
    equal(3, 4, "A planned failure message");
});