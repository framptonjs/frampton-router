import splitPath from 'frampton-router/split_path';

QUnit.module('Frampton.Router.splitPath');

QUnit.test('should return array of path segments', function() {
  var path = '/user/1/profile/edit';
  deepEqual(splitPath(path), ['user', '1', 'profile', 'edit']);
});