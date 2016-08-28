import splitPath from 'frampton-router/split_path';

QUnit.module('Frampton.Router.splitPath');

QUnit.test('should return array of path segments', function(assert) {
  const path = '/user/1/profile/edit';
  const actual = splitPath(path);
  const expected = ['user', '1', 'profile', 'edit'];
  assert.deepEqual(actual, expected);
});
