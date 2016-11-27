import splitPath from 'frampton-router/utils/split_path';

QUnit.module('Frampton.Router.Utils.splitPath');

QUnit.test('returns array of path segments', function(assert) {
  const path = '/user/1/profile/edit';
  const actual = splitPath(path);
  const expected = ['user', '1', 'profile', 'edit'];
  assert.deepEqual(actual, expected);
});
