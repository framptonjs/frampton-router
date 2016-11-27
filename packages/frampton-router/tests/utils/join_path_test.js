import joinPath from 'frampton-router/utils/join_path';

QUnit.module('Frampton.Router.Utils.joinPath');

QUnit.test('returns a string from array of segments', function(assert) {
  const paths = ['user', '1', 'profile', 'edit'];
  const actual = joinPath(paths);
  const expected = 'user/1/profile/edit';
  assert.deepEqual(actual, expected);
});
