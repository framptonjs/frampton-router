import int from 'frampton-router/int';

QUnit.module('Frampton.Router.int');

QUnit.test('returns a Just for an integer', function(assert) {
  const actual = int('3').toString();
  const expected = 'Just(3)';
  assert.equal(actual, expected);
});

QUnit.test('returns a Nothing for a string', function(assert) {
  const actual = int('hello').toString();
  const expected = 'Nothing';
  assert.equal(actual, expected);
});

QUnit.test('returns a Nothing for a complex path', function(assert) {
  const actual = int('/45/65').toString();
  const expected = 'Nothing';
  assert.equal(actual, expected);
});
