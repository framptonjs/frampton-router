import createUnion from 'frampton-data/union/create';
import parser from 'frampton-router/parser';
import map from 'frampton-router/map';

QUnit.module('Frampton.Router.map');

const format = '/user/:number/profile/edit';
const pathParser = parser(format);
const Actions = createUnion({
  TestAction : [ 'id' ]
});

QUnit.test('returns Just with value mapped for matched path', function(assert) {
  const mapped = map(Actions.TestAction, pathParser);
  const actual = mapped('/user/34/profile/edit').toString();
  const expected = 'Just(Union.TestAction(34))';
  assert.equal(actual, expected);
});
