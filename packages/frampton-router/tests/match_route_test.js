import matchRoute from 'frampton-router/match_route';

QUnit.module('Frampton.Router.matchRoute');

QUnit.test('should correctly match route to a path', function() {
  const route = '/user/new';
  const path = '/user/new';
  const tokens = [];
  deepEqual(matchRoute(route, path), tokens);
});

QUnit.test('should correctly match route with dynamic segment to a path', function() {
  const route = '/user/:id';
  const path = '/user/1234';
  const tokens = ['1234'];
  deepEqual(matchRoute(route, path), tokens);
});

QUnit.test('should correctly match route with multiple dynamic segments to path', function() {
  const route = '/user/:id/new/:id';
  const path = '/user/1234/new/5678';
  const tokens = ['1234', '5678'];
  deepEqual(matchRoute(route, path), tokens);
});

QUnit.test('should not match a partial route', function() {
  const route = '/user/:id';
  const path = '/user/1234/new/5678';
  equal(matchRoute(route, path), null);
});

QUnit.test('should not match a partial path', function() {
  const route = '/user/:id/comment/:id';
  const path = '/user/1234';
  equal(matchRoute(route, path), null);
});