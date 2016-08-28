import matchRoute from 'frampton-router/match_route';

QUnit.module('Frampton.Router.matchRoute');

QUnit.test('should correctly match route to a path', function(assert) {
  const route = '/user/new';
  const path = '/user/new';
  const actual = matchRoute(route, path);
  const expected = [];
  assert.deepEqual(actual, expected);
});

QUnit.test('should correctly match route with dynamic segment to a path', function(assert) {
  const route = '/user/:id';
  const path = '/user/1234';
  const actual = matchRoute(route, path);
  const expected = ['1234'];
  assert.deepEqual(actual, expected);
});

QUnit.test('should correctly match route with multiple dynamic segments to path', function(assert) {
  const route = '/user/:id/new/:id';
  const path = '/user/1234/new/5678';
  const tokens = ['1234', '5678'];
  assert.deepEqual(matchRoute(route, path), tokens);
});

QUnit.test('should not match a partial route', function(assert) {
  const route = '/user/:id';
  const path = '/user/1234/new/5678';
  const actual = matchRoute(route, path);
  const expected = null;
  assert.equal(actual, expected);
});

QUnit.test('should not match a partial path', function(assert) {
  const route = '/user/:id/comment/:id';
  const path = '/user/1234';
  const actual = matchRoute(route, path);
  const expected = null;
  assert.equal(actual, expected);
});
