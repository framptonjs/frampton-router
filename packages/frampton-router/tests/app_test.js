import createApp from 'frampton-router/app';
import createSignal from 'frampton-signal/create';
import Never from 'frampton-data/task/never';
import { div, text } from 'frampton-dom/html/dom';
import history from 'frampton-history/signals/history';

QUnit.module('Frampton.Router.app', {
  beforeEach() {
    this.fixture = document.getElementById('qunit-fixture');
    this.rootElement = document.createElement('div');
    this.fixture.appendChild(this.rootElement);
  },
  afterEach() {
    this.fixture.innerHTML = '';
    this.rootElement = null;
    this.fixture = null;
  }
});

const clickHandler = (evt) => {
  return 'click happened';
};

const initState = (count) => ({
  count: count
});

QUnit.test('creates a functioning app', function(assert) {
  assert.expect(12);
  const done = assert.async();
  const inputs = createSignal();
  var count = 0;

  function init(route) {
    assert.equal(route, 'index');
    return [ initState(0), Never() ];
  }

  function update(msg, state) {
    assert.equal(msg, 'first', 'Message incorrect');
    assert.equal(state.count, 0, 'Initial state incorrect');

    switch(msg) {
      case 'first':
        count ++;
        const newState = initState(state.count + 1);
        return [ newState, Never() ];

      default:
        return [ state, Never() ];
    }
  }

  function view(state) {
    assert.equal(state.count, count);
    if (state.count > 1) { done(); }
    return div({ onClick : clickHandler }, [
      text('click me')
    ]);
  }

  function urlParser(loc) {
    assert.ok(typeof loc.pathname === 'string');
    assert.ok(typeof loc.hash === 'string');
    assert.ok(typeof loc.search === 'string');
    return 'index';
  }

  function urlUpdate(route, state) {
    count ++;
    const newState = initState(state.count + 1);
    return [ newState, Never() ];
  }

  createApp({
    init: init,
    update: update,
    urlParser: urlParser,
    urlUpdate: urlUpdate,
    view: view,
    inputs: [ inputs ],
    rootElement: this.rootElement
  });

  inputs.push('first');

  setTimeout(() => {
    history.push({
      state: null
    });
  }, 1000);
});
