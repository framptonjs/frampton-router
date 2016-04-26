(function() {
/*globals Frampton:true */
var define, require;
var global = this;

(function() {

  if (typeof Frampton === 'undefined') {
    throw new Error('Frampton is undefined');
  };

  define = Frampton.__loader.define;
  require = Frampton.__loader.require;

}());
define('frampton-history', ['exports', 'frampton/namespace', 'frampton-history/set_hash', 'frampton-history/push_state', 'frampton-history/replace_state', 'frampton-history/history_change', 'frampton-history/depth', 'frampton-history/state', 'frampton-history/search', 'frampton-history/hash', 'frampton-history/path'], function (exports, _framptonNamespace, _framptonHistorySet_hash, _framptonHistoryPush_state, _framptonHistoryReplace_state, _framptonHistoryHistory_change, _framptonHistoryDepth, _framptonHistoryState, _framptonHistorySearch, _framptonHistoryHash, _framptonHistoryPath) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  var _setHash = _interopRequireDefault(_framptonHistorySet_hash);

  var _pushState = _interopRequireDefault(_framptonHistoryPush_state);

  var _replaceState = _interopRequireDefault(_framptonHistoryReplace_state);

  var _change = _interopRequireDefault(_framptonHistoryHistory_change);

  var _depth = _interopRequireDefault(_framptonHistoryDepth);

  var _state = _interopRequireDefault(_framptonHistoryState);

  var _search = _interopRequireDefault(_framptonHistorySearch);

  var _hash = _interopRequireDefault(_framptonHistoryHash);

  var _path = _interopRequireDefault(_framptonHistoryPath);

  /**
   * @name History
   * @namespace
   * @memberof Frampton
   */
  _Frampton['default'].History = {};
  _Frampton['default'].History.VERSION = '0.0.2';
  _Frampton['default'].History.pushState = _pushState['default'];
  _Frampton['default'].History.replaceState = _replaceState['default'];
  _Frampton['default'].History.setHash = _setHash['default'];
  _Frampton['default'].History.depth = _depth['default'];
  _Frampton['default'].History.state = _state['default'];
  _Frampton['default'].History.hash = _hash['default'];
  _Frampton['default'].History.path = _path['default'];
  _Frampton['default'].History.search = _search['default'];
  _Frampton['default'].History.change = _change['default'];
});
define('frampton-history/depth', ['exports', 'module', 'frampton-signal/create'], function (exports, module, _framptonSignalCreate) {
  'use strict';

  module.exports = depth;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _create = _interopRequireDefault(_framptonSignalCreate);

  var instance = null;

  /**
   * A Behavior representing the current depth of application history
   *
   * @name depth
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function depth() {
    if (!instance) {
      instance = _create['default'](0);
    }
    return instance;
  }
});
define('frampton-history/get_history', ['exports', 'module', 'frampton/namespace'], function (exports, module, _framptonNamespace) {
  'use strict';

  module.exports = ajax_api;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  function createMockHistory() {

    return {
      state: null,
      pushState: function pushState(state, title, url) {},
      replaceState: function replaceState(state, title, url) {}
    };
  }

  function ajax_api() {
    if (_Frampton['default'].isTest()) {
      return createMockHistory();
    } else {
      return window.history;
    }
  }
});
define('frampton-history/get_location', ['exports', 'module', 'frampton/namespace'], function (exports, module, _framptonNamespace) {
  'use strict';

  module.exports = ajax_api;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  function ajax_api() {
    if (_Frampton['default'].isTest()) {
      return {
        pathname: '/test/path',
        search: '?test=true'
      };
    } else {
      return window.location;
    }
  }
});
define('frampton-history/hash_signal', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-history/location_signal'], function (exports, module, _framptonUtilsIs_nothing, _framptonHistoryLocation_signal) {
  'use strict';

  module.exports = hash_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _location = _interopRequireDefault(_framptonHistoryLocation_signal);

  var instance = null;

  /**
   * Returns an Signal of the current location.hash
   *
   * @name hashStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function hash_stream() {
    if (_isNothing['default'](instance)) {
      instance = _location['default']().map(function (loc) {
        return loc.hash.replace('#', '');
      });
    }
    return instance;
  }
});
define('frampton-history/hash', ['exports', 'module', 'frampton-signal/stepper', 'frampton-history/get_location', 'frampton-history/hash_signal'], function (exports, module, _framptonSignalStepper, _framptonHistoryGet_location, _framptonHistoryHash_signal) {
  'use strict';

  module.exports = hash;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _stepper = _interopRequireDefault(_framptonSignalStepper);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var _hashSignal = _interopRequireDefault(_framptonHistoryHash_signal);

  var instance = null;

  /**
   * A Signal representing the current location.hash
   *
   * @name hash
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function hash() {
    if (!instance) {
      instance = _stepper['default'](_location['default']().hash, _hashSignal['default']());
    }
    return instance;
  }
});
define('frampton-history/history_change', ['exports', 'module', 'frampton-history/history_signal'], function (exports, module, _framptonHistoryHistory_signal) {
  'use strict';

  module.exports = history_change;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _history = _interopRequireDefault(_framptonHistoryHistory_signal);

  /**
   * @name historyChange
   * @method
   * @memberof Frampton.History
   * @param {Function} fn A function to call when history changes
   * @return {Function} A function to unsubscribe from changes
   */

  function history_change(fn) {
    return _history['default']().next(fn);
  }
});
define('frampton-history/history_signal', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-history/get_history', 'frampton-history/stack_signal', 'frampton-history/popstate_signal'], function (exports, module, _framptonUtilsIs_nothing, _framptonHistoryGet_history, _framptonHistoryStack_signal, _framptonHistoryPopstate_signal) {
  'use strict';

  module.exports = history_signal;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _history = _interopRequireDefault(_framptonHistoryGet_history);

  var _stack = _interopRequireDefault(_framptonHistoryStack_signal);

  var _popstate = _interopRequireDefault(_framptonHistoryPopstate_signal);

  var instance = null;

  /**
   * Returns a Signal of the current window.history
   *
   * @name historySignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function history_signal() {

    if (_isNothing['default'](instance)) {
      instance = _stack['default']().merge(_popstate['default']()).map(function () {
        return _history['default']();
      });
    }

    return instance;
  }
});
define('frampton-history/history_stack', ['exports', 'frampton-list/last', 'frampton-history/depth', 'frampton-history/stack_signal'], function (exports, _framptonListLast, _framptonHistoryDepth, _framptonHistoryStack_signal) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _last = _interopRequireDefault(_framptonListLast);

  var _depth = _interopRequireDefault(_framptonHistoryDepth);

  var _stack = _interopRequireDefault(_framptonHistoryStack_signal);

  var depthSignal = _depth['default']();
  var stackSignal = _stack['default']();

  /**
   * The current state of the application history.
   *
   * @name stack
   * @private
   * @memberof Frampton.History
   * @type {Object}
   */
  var state = {
    currentState: null,
    currentId: 0,
    _store: []
  };

  /**
   * Pushes a new state onto the application's internal history stack. In doing
   * so it also updates the current depth of the history stack.
   *
   * @name pushHistory
   * @method
   * @private
   * @memberof Frampton.History
   * @param {Object} newState
   */
  var pushHistory = function push_state(newState) {
    state._store.push(newState);
    state.currentState = newState;
    state.currentId = newState.id;
    depthSignal(state._store.length);
    stackSignal(null);
  };

  /**
   * Replaces the current state on the application's internal history stack.
   *
   * @name replaceHistory
   * @method
   * @private
   * @memberof Frampton.History
   * @param {Object} newState
   */
  var replaceHistory = function replace_state(newState) {
    state.currentState = newState;
    state.currentId = newState.id;
    stackSignal(null);
  };

  /**
   * Pops the last element from the application's internal history stack. In doing
   * so it also updates the current depth of the history stack.
   *
   * @name popHistory
   * @method
   * @private
   * @memberof Frampton.History
   */
  var popHistory = function pop_history() {
    state._store.pop();
    state.currentState = _last['default'](state._store);
    state.currentId = state.currentState ? state.currentState.id : 0;
    depthSignal(state._store.length);
    stackSignal(null);
  };

  exports.stack = state;
  exports.pushHistory = pushHistory;
  exports.replaceHistory = replaceHistory;
  exports.popHistory = popHistory;
});
define('frampton-history/location_signal', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-history/history_signal', 'frampton-history/get_location'], function (exports, module, _framptonUtilsIs_nothing, _framptonHistoryHistory_signal, _framptonHistoryGet_location) {
  'use strict';

  module.exports = location_signal;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _history = _interopRequireDefault(_framptonHistoryHistory_signal);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var instance = null;

  /**
   * @name locationSignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function location_signal() {
    if (_isNothing['default'](instance)) {
      instance = _history['default']().map(function () {
        return _location['default']();
      });
    }
    return instance;
  }
});
define('frampton-history/parse_search', ['exports', 'module', 'frampton-utils/memoize', 'frampton-io/http/utils/query_unescape'], function (exports, module, _framptonUtilsMemoize, _framptonIoHttpUtilsQuery_unescape) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _queryUnescape = _interopRequireDefault(_framptonIoHttpUtilsQuery_unescape);

  function validPair(pair) {
    return pair.length === 2 && pair[0] !== '' && pair[1] !== '';
  }

  /**
   * Takes a URL query string and returns a hash of key/values
   * @name parseSearch
   * @method
   * @private
   * @memberof Frampton.History
   * @param {String} search Query string to parse
   * @returns {Object}
   */
  module.exports = _memoize['default'](function parse_search(search) {
    var obj = {};
    var parts = search.replace('?', '').split('&');
    parts.forEach(function (part) {
      var pair = part.split('=');
      // check we have a properly-formed key/value pair.
      if (validPair(pair)) {
        obj[_queryUnescape['default'](pair[0])] = _queryUnescape['default'](pair[1]);
      }
    });
    return obj;
  });
});
define('frampton-history/path_signal', ['exports', 'module', 'frampton-history/location_signal'], function (exports, module, _framptonHistoryLocation_signal) {
  'use strict';

  module.exports = path_signal;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _location = _interopRequireDefault(_framptonHistoryLocation_signal);

  var instance = null;

  /**
   * Returns an Signal of updates to location.pathname
   *
   * @name pathSignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function path_signal() {
    if (!instance) {
      instance = _location['default']().map(function (loc) {
        return loc.pathname;
      });
    }
    return instance;
  }
});
define('frampton-history/path', ['exports', 'module', 'frampton-signal/stepper', 'frampton-history/get_location', 'frampton-history/path_signal'], function (exports, module, _framptonSignalStepper, _framptonHistoryGet_location, _framptonHistoryPath_signal) {
  'use strict';

  module.exports = path;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _stepper = _interopRequireDefault(_framptonSignalStepper);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var _pathSignal = _interopRequireDefault(_framptonHistoryPath_signal);

  var instance = null;

  /**
   * A Signal representing the current location.pathname
   *
   * @name path
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function path() {
    if (!instance) {
      instance = _stepper['default'](_location['default']().pathname, _pathSignal['default']());
    }
    return instance;
  }
});
define('frampton-history/popstate_signal', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-events/on_event', 'frampton-history/history_stack'], function (exports, module, _framptonUtilsIs_nothing, _framptonEventsOn_event, _framptonHistoryHistory_stack) {
  'use strict';

  module.exports = popstate_signal;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _onEvent = _interopRequireDefault(_framptonEventsOn_event);

  var instance = null;

  /**
   * Returns a Signal of popstate events. Also helps to internally keep track of
   * the current depth of the history stack.
   *
   * @name popstateSignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Siganl}
   */

  function popstate_signal() {

    if (!window.history || !window.history.pushState) {
      throw new Error('History API is not supported by this browser');
    }

    if (_isNothing['default'](instance)) {
      instance = _onEvent['default']('popstate', window).map(function (evt) {
        if (evt.state) {
          if (evt.state.id < _framptonHistoryHistory_stack.stack.currentId) {
            _framptonHistoryHistory_stack.popHistory();
          } else if (evt.state.id > _framptonHistoryHistory_stack.stack.currentId) {
            _framptonHistoryHistory_stack.pushHistory(evt.state);
          }
        }
        return evt;
      });
    }

    return instance;
  }
});
define('frampton-history/push_state', ['exports', 'module', 'frampton-utils/guid', 'frampton-history/get_history', 'frampton-history/with_valid_state', 'frampton-history/history_stack'], function (exports, module, _framptonUtilsGuid, _framptonHistoryGet_history, _framptonHistoryWith_valid_state, _framptonHistoryHistory_stack) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _guid = _interopRequireDefault(_framptonUtilsGuid);

  var _history = _interopRequireDefault(_framptonHistoryGet_history);

  var _withValidState = _interopRequireDefault(_framptonHistoryWith_valid_state);

  /**
   * @name pushState
   * @method
   * @memberof Frampton.History
   * @param {Object} state A state to replace the current state
   */
  module.exports = _withValidState['default'](function push_state(state) {
    state.id = _guid['default']();
    _history['default']().pushState(state, state.name, state.path);
    _framptonHistoryHistory_stack.pushHistory(state);
  });
});
define('frampton-history/replace_state', ['exports', 'module', 'frampton-utils/guid', 'frampton-history/get_history', 'frampton-history/with_valid_state', 'frampton-history/history_stack'], function (exports, module, _framptonUtilsGuid, _framptonHistoryGet_history, _framptonHistoryWith_valid_state, _framptonHistoryHistory_stack) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _guid = _interopRequireDefault(_framptonUtilsGuid);

  var _history = _interopRequireDefault(_framptonHistoryGet_history);

  var _withValidState = _interopRequireDefault(_framptonHistoryWith_valid_state);

  /**
   * @name replaceState
   * @method
   * @memberof Frampton.History
   * @param {Object} state A state to replace the current state
   */
  module.exports = _withValidState['default'](function replace_state(state) {
    state.id = _guid['default']();
    _history['default']().replaceState(state, state.name, state.path);
    _framptonHistoryHistory_stack.replaceHistory(state);
  });
});
define('frampton-history/search_signal', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-history/location_signal', 'frampton-history/parse_search'], function (exports, module, _framptonUtilsIs_nothing, _framptonHistoryLocation_signal, _framptonHistoryParse_search) {
  'use strict';

  module.exports = hash_signal;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _location = _interopRequireDefault(_framptonHistoryLocation_signal);

  var _parseSearch = _interopRequireDefault(_framptonHistoryParse_search);

  var instance = null;

  /**
   * Returns an Signal of updates to location.search
   *
   * @name searchSignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function hash_signal() {
    if (_isNothing['default'](instance)) {
      instance = _location['default']().map(function (loc) {
        return _parseSearch['default'](loc.search || '');
      });
    }
    return instance;
  }
});
define('frampton-history/search', ['exports', 'module', 'frampton-signal/stepper', 'frampton-history/get_location', 'frampton-history/search_signal', 'frampton-history/parse_search'], function (exports, module, _framptonSignalStepper, _framptonHistoryGet_location, _framptonHistorySearch_signal, _framptonHistoryParse_search) {
  'use strict';

  module.exports = search;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _stepper = _interopRequireDefault(_framptonSignalStepper);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var _searchSignal = _interopRequireDefault(_framptonHistorySearch_signal);

  var _parseSearch = _interopRequireDefault(_framptonHistoryParse_search);

  var instance = null;

  /**
   * A Signal representing the current location.search
   *
   * @name search
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function search() {
    if (!instance) {
      instance = _stepper['default'](_parseSearch['default'](_location['default']().search || ''), _searchSignal['default']());
    }
    return instance;
  }
});
define('frampton-history/set_hash', ['exports', 'module', 'frampton-history/history_stack'], function (exports, module, _framptonHistoryHistory_stack) {
  'use strict';

  module.exports = set_hash;

  /**
   * @name setHash
   * @method
   * @memberof Frampton.History
   * @param {String} hash
   */

  function set_hash(hash) {
    _framptonHistoryHistory_stack.pushState({
      name: 'hash',
      path: '#' + hash
    });
  }
});
define('frampton-history/stack_signal', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-signal/create'], function (exports, module, _framptonUtilsIs_nothing, _framptonSignalCreate) {
  'use strict';

  module.exports = stack_signal;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _create = _interopRequireDefault(_framptonSignalCreate);

  var instance = null;

  /**
   * Signal of changes to the history stack
   *
   * @name stackSignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function stack_signal() {

    if (_isNothing['default'](instance)) {
      instance = _create['default']();
    }

    return instance;
  }
});
define('frampton-history/state_signal', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-history/history_signal'], function (exports, module, _framptonUtilsIs_nothing, _framptonHistoryHistory_signal) {
  'use strict';

  module.exports = state_signal;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _history = _interopRequireDefault(_framptonHistoryHistory_signal);

  var instance = null;

  /**
   * Returns an Signal of updates to history.state
   *
   * @name stateSignal
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function state_signal() {
    if (_isNothing['default'](instance)) {
      instance = _history['default']().map(function (h) {
        return h.state;
      });
    }
    return instance;
  }
});
define('frampton-history/state', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-signal/stepper', 'frampton-history/get_history', 'frampton-history/state_signal'], function (exports, module, _framptonUtilsIs_nothing, _framptonSignalStepper, _framptonHistoryGet_history, _framptonHistoryState_signal) {
  'use strict';

  module.exports = state;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _stepper = _interopRequireDefault(_framptonSignalStepper);

  var _history = _interopRequireDefault(_framptonHistoryGet_history);

  var _stateSignal = _interopRequireDefault(_framptonHistoryState_signal);

  var instance = null;

  /**
   * A Signal representing the current history.state
   *
   * @name state
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signal.Signal}
   */

  function state() {
    if (_isNothing['default'](instance)) {
      instance = _stepper['default'](_history['default']().state, _stateSignal['default']());
    }
    return instance;
  }
});
define("frampton-history/valid_state", ["exports", "module"], function (exports, module) {
  /**
   * Internally we require all state objects to have a name and path. This
   * checks a state object to ensure it meets those requirements.
   *
   * @name validState
   * @method
   * @private
   * @memberof Frampton.History
   * @param {Object} state
   * @returns {Boolean}
   */
  "use strict";

  module.exports = valid_state;

  function valid_state(state) {
    return !!(state.name && state.path);
  }
});
define('frampton-history/with_valid_state', ['exports', 'module', 'frampton-utils/assert', 'frampton-history/valid_state'], function (exports, module, _framptonUtilsAssert, _framptonHistoryValid_state) {
  'use strict';

  module.exports = with_valid_state;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _assert = _interopRequireDefault(_framptonUtilsAssert);

  var _validState = _interopRequireDefault(_framptonHistoryValid_state);

  /**
   * Validates that the given function recieves a valid state object as its
   * sole argument.
   *
   * @name withValidState
   * @method
   * @private
   * @memberof Frampton.History
   * @param {Function} fn Function whose argument to validate
   * @returns {Function} A function that will throw an error if it is not
   * passed a valid state.
   */

  function with_valid_state(fn) {
    return function (state) {
      _assert['default']('State not valid', _validState['default'](state));
      fn(state);
    };
  }
});
require("frampton-history");

})();