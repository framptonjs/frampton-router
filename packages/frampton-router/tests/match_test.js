import match from 'frampton-router/match';
import route from 'frampton-router/route';

QUnit.module('Frampton.Router.match');

QUnit.test('should correctly select route for path', function(assert) {
  const routes = [
    route('/user', function() { assert.ok(false); }),
    route('/user/new', function() { assert.ok(true); }),
    route('/user/old', function() { assert.ok(false); })
  ];
  const path = '/user/new';
  match(routes, path);
});

QUnit.test('Should correctly pass argument to matched function', function(assert) {
  const routes = [
    route('/user', function() { assert.ok(false); }),
    route('/user/new', function() { assert.ok(false); }),
    route('/user/:id', function(id) { assert.equal(5, id); })
  ];
  const path = '/user/5';
  match(routes, path);
});

QUnit.test('should correctly pass arguments to matched function', function(assert) {
  const routes = [
    route('/user', function() { assert.ok(false); }),
    route('/user/new', function() { assert.ok(false); }),
    route('/user/:u_id/comment/:c_id', function(u_id, c_id) {
      assert.equal(5, u_id);
      assert.equal(8, c_id);
    })
  ];
  const path = '/user/5/comment/8';
  match(routes, path);
});

QUnit.test('should check routes with correct type', function(assert) {
  const routes = [
    route('/user', function() { ok(false); }),
    route('/user/:number/:number/:string', function() { assert.ok(false); }),
    route('/user/:string/:number/:number', function() { assert.ok(false); }),
    route('/user/:number/:number/:number', function(id1, id2, id3) {
      assert.equal('1234', id1);
      assert.equal('1235', id2);
      assert.equal('1236', id3);
    })
  ];
  const path = '/user/1234/1235/1236';
  match(routes, path);
});
