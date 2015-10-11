import match from 'frampton-router/match';
import route from 'frampton-router/route';

QUnit.module('Frampton.Router.match');

QUnit.test('should correctly select route for path', function() {
  var routes = [
    route('/user', function() { ok(false); }),
    route('/user/new', function() { ok(true); }),
    route('/user/old', function() { ok(false); })
  ];
  var path = '/user/new';
  match(routes, path);
});

QUnit.test('should correctly pass argument to matched function', function() {
  var routes = [
    route('/user', function() { ok(false); }),
    route('/user/new', function() { ok(false); }),
    route('/user/:id', function(id) { equal(5, id); })
  ];
  var path = '/user/5';
  match(routes, path);
});

QUnit.test('should correctly pass arguments to matched function', function() {
  var routes = [
    route('/user', function() { ok(false); }),
    route('/user/new', function() { ok(false); }),
    route('/user/:u_id/comment/:c_id', function(u_id, c_id) {
      equal(5, u_id);
      equal(8, c_id);
    })
  ];
  var path = '/user/5/comment/8';
  match(routes, path);
});

QUnit.test('should check routes with correct type', function() {
  var routes = [
    route('/user', function() { ok(false); }),
    route('/user/:number/:number/:string', function() { ok(false); }),
    route('/user/:string/:number/:number', function() { ok(false); }),
    route('/user/:number/:number/:number', function(id1, id2, id3) {
      equal('1234', id1);
      equal('1235', id2);
      equal('1236', id3);
    })
  ];
  var path = '/user/1234/1235/1236';
  match(routes, path);
});