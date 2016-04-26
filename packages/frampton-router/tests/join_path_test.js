import joinPath from 'frampton-router/join_path';

QUnit.module('Frampton.Router.joinPath');

QUnit.test('should return string from array of segments', function() {
  const paths = ['user', '1', 'profile', 'edit'];
  deepEqual(joinPath(paths), 'user/1/profile/edit');
});