import matchRoute from 'frampton-router/match_route';

QUnit.module('Frampton.Router.matchRoute');

QUnit.test('should correctly match route to a path', function() {
  var route = '/user/new';
  var path = '/user/new';
  var tokens = [];
  deepEqual(matchRoute(route, path), tokens);
});

QUnit.test('should correctly match route with dynamic segment to a path', function() {
  var route = '/user/:id';
  var path = '/user/1234';
  var tokens = ['1234'];
  deepEqual(matchRoute(route, path), tokens);
});

QUnit.test('should correctly match route with multiple dynamic segments to path', function() {
  var route = '/user/:id/new/:id';
  var path = '/user/1234/new/5678';
  var tokens = ['1234', '5678'];
  deepEqual(matchRoute(route, path), tokens);
});

QUnit.test('should not match a partial route', function() {
  var route = '/user/:id';
  var path = '/user/1234/new/5678';
  equal(matchRoute(route, path), null);
});

QUnit.test('should not match a partial path', function() {
  var route = '/user/:id/comment/:id';
  var path = '/user/1234';
  equal(matchRoute(route, path), null);
});