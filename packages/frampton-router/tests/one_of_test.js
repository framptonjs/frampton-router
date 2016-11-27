import parser from 'frampton-router/parser';
import oneOf from 'frampton-router/one_of';

QUnit.module('Frampton.Router.oneOf');

const userIndexParser = parser('/user/');
const userDetailParser = parser('/user/:number');
const userActionParser = parser('/user/:number/:string');

QUnit.test('returns a Just if any parser matches', function(assert) {
  assert.expect(3);
  const oneOfParser = oneOf([
    userIndexParser,
    userDetailParser,
    userActionParser
  ]);

  const pathOne = '/user/';
  const actualOne = oneOfParser(pathOne).toString();
  const expectedOne = 'Just()';
  assert.equal(actualOne, expectedOne);

  const pathTwo = '/user/34';
  const actualTwo = oneOfParser(pathTwo).toString();
  const expectedTwo = 'Just(34)';
  assert.equal(actualTwo, expectedTwo);

  const pathThree = '/user/34/edit';
  const actualThree = oneOfParser(pathThree).toString();
  const expectedThree = 'Just(34,edit)';
  assert.equal(actualThree, expectedThree);
});

QUnit.test('returns a Nothing if no parser matches', function(assert) {
  assert.expect(1);
  const oneOfParser = oneOf([
    userIndexParser,
    userDetailParser,
    userActionParser
  ]);

  const pathOne = '/bob/';
  const actualOne = oneOfParser(pathOne).toString();
  const expectedOne = 'Nothing';
  assert.equal(actualOne, expectedOne);
});
