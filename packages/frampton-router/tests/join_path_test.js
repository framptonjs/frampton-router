import joinPath from 'frampton-router/join_path';

QUnit.module('Frampton.Router.joinPath');

QUnit.test('should return string from array of segments', function(assert) {
  const paths = ['user', '1', 'profile', 'edit'];
  const actual = joinPath(paths);
  const expected = 'user/1/profile/edit';
  assert.deepEqual(actual, expected);
});
