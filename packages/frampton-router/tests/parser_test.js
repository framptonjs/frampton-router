import parser from 'frampton-router/parser';

QUnit.module('Frampton.Router.parser');

QUnit.test('returns a function', function(assert) {
  const format = '/user/:number/profile/edit';
  const actual = parser(format);
  assert.ok(typeof actual === 'function');
});

QUnit.test('parser return Just for matched path', function(assert) {
  const format = '/user/:number/profile/edit';
  const path = '/user/34/profile/edit';
  const pathParser = parser(format);
  const actual = pathParser(path).toString();
  const expected = 'Just(34)';
  assert.equal(actual, expected);
});

QUnit.test('parser returns Nothing for incorrect types', function(assert) {
  const format = '/user/:number/profile/edit';
  const path = '/user/john/profile/edit';
  const pathParser = parser(format);
  const actual = pathParser(path).toString();
  const expected = 'Nothing';
  assert.equal(actual, expected);
});

QUnit.test('parser returns Nothing if path is too short', function(assert) {
  const format = '/user/:number/profile/edit';
  const path = '/user/34/profile';
  const pathParser = parser(format);
  const actual = pathParser(path).toString();
  const expected = 'Nothing';
  assert.equal(actual, expected);
});

QUnit.test('parser returns Nothing if path is too long', function(assert) {
  const format = '/user/:number/profile';
  const path = '/user/34/profile/edit';
  const pathParser = parser(format);
  const actual = pathParser(path).toString();
  const expected = 'Nothing';
  assert.equal(actual, expected);
});

QUnit.test('parser returns Just for index on end of matched path', function(assert) {
  const format = '/user/:number/profile/';
  const path = '/user/34/profile/index.html';
  const pathParser = parser(format);
  const actual = pathParser(path).toString();
  const expected = 'Just(34)';
  assert.equal(actual, expected);
});
