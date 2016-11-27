import dynamicPath from 'frampton-router/utils/dynamic_path';

QUnit.module('Frampton.Router.Utils.dynamicPath');

QUnit.test('returns a string with colon removed', function(assert) {
  const actual = dynamicPath('/:edit');
  const expected = 'edit';
  assert.equal(actual, expected);
});
