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
  _Frampton['default'].History.VERSION = '0.0.1';
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
define('frampton-history/depth', ['exports', 'module', 'frampton-signals/constant'], function (exports, module, _framptonSignalsConstant) {
  'use strict';

  module.exports = depth;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _constant = _interopRequireDefault(_framptonSignalsConstant);

  var instance = null;

  /**
   * A Behavior representing the current depth of application history
   *
   * @name depth
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signals.Behavior}
   */

  function depth() {
    if (!instance) {
      instance = _constant['default'](0);
    }
    return instance;
  }
});
define("frampton-history/get_history", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = get_history;

  function get_history() {
    return window.history;
  }
});
define("frampton-history/get_location", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = get_location;

  function get_location() {
    return window.location;
  }
});
define('frampton-history/hash', ['exports', 'module', 'frampton-signals/stepper', 'frampton-history/get_location', 'frampton-history/hash_stream'], function (exports, module, _framptonSignalsStepper, _framptonHistoryGet_location, _framptonHistoryHash_stream) {
  'use strict';

  module.exports = hash;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _stepper = _interopRequireDefault(_framptonSignalsStepper);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var _hashStream = _interopRequireDefault(_framptonHistoryHash_stream);

  var instance = null;

  /**
   * A Behavior representing the current location.hash
   *
   * @name hash
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signals.Behavior}
   */

  function hash() {
    if (!instance) {
      instance = _stepper['default'](_location['default']().hash, _hashStream['default']());
    }
    return instance;
  }
});
define('frampton-history/hash_stream', ['exports', 'module', 'frampton-history/location_stream'], function (exports, module, _framptonHistoryLocation_stream) {
  'use strict';

  module.exports = hash_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _locationStream = _interopRequireDefault(_framptonHistoryLocation_stream);

  var instance = null;

  /**
   * Returns an EventStream of the current location.hash
   *
   * @name hashStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function hash_stream() {
    if (!instance) {
      instance = _locationStream['default']().map(function (loc) {
        return loc.hash.replace('#', '');
      });
    }
    return instance;
  }
});
define('frampton-history/history_change', ['exports', 'module', 'frampton-history/history_stream'], function (exports, module, _framptonHistoryHistory_stream) {
  'use strict';

  module.exports = history_change;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _historyStream = _interopRequireDefault(_framptonHistoryHistory_stream);

  /**
   * @name historyChange
   * @method
   * @memberof Frampton.History
   * @param {Function} fn A function to call when history changes
   * @return {Function} A function to unsubscribe from changes
   */

  function history_change(fn) {
    return _historyStream['default']().next(fn);
  }
});
define('frampton-history/history_stack', ['exports', 'frampton-list/last', 'frampton-history/depth', 'frampton-history/stack_stream'], function (exports, _framptonListLast, _framptonHistoryDepth, _framptonHistoryStack_stream) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _last = _interopRequireDefault(_framptonListLast);

  var _depth = _interopRequireDefault(_framptonHistoryDepth);

  var _stackStream = _interopRequireDefault(_framptonHistoryStack_stream);

  /**
   * The current state of the application history.
   *
   * @name stack
   * @private
   * @memberof Frampton.History
   * @type {Object}
   */
  var stack = {
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
    stack._store.push(newState);
    stack.currentState = newState;
    stack.currentId = newState.id;
    _depth['default']().update(stack._store.length);
    _stackStream['default']().pushNext(null);
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
    stack.currentState = newState;
    stack.currentId = newState.id;
    _stackStream['default']().pushNext(null);
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
    stack._store.pop();
    stack.currentState = _last['default'](stack._store);
    stack.currentId = stack.currentState ? stack.currentState.id : 0;
    _depth['default']().update(stack._store.length);
    _stackStream['default']().pushNext(null);
  };

  exports.stack = stack;
  exports.pushHistory = pushHistory;
  exports.replaceHistory = replaceHistory;
  exports.popHistory = popHistory;
});
define('frampton-history/history_stream', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-history/get_history', 'frampton-history/stack_stream', 'frampton-history/popstate_stream'], function (exports, module, _framptonUtilsIs_nothing, _framptonHistoryGet_history, _framptonHistoryStack_stream, _framptonHistoryPopstate_stream) {
  'use strict';

  module.exports = history_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _history = _interopRequireDefault(_framptonHistoryGet_history);

  var _stack = _interopRequireDefault(_framptonHistoryStack_stream);

  var _popstate = _interopRequireDefault(_framptonHistoryPopstate_stream);

  var instance = null;

  /**
   * Returns a stream of the current window.history
   *
   * @name historyStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function history_stream() {

    if (_isNothing['default'](instance)) {
      instance = _stack['default']().merge(_popstate['default']()).map(function () {
        return _history['default']();
      });
    }

    return instance;
  }
});
define('frampton-history/location_stream', ['exports', 'module', 'frampton-history/history_stream', 'frampton-history/get_location'], function (exports, module, _framptonHistoryHistory_stream, _framptonHistoryGet_location) {
  'use strict';

  module.exports = location_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _historyStream = _interopRequireDefault(_framptonHistoryHistory_stream);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var instance = null;

  /**
   * @name locationStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function location_stream() {
    if (!instance) {
      instance = _historyStream['default']().map(function () {
        return _location['default']();
      });
    }
    return instance;
  }
});
define('frampton-history/parse_search', ['exports', 'module', 'frampton-utils/memoize', 'frampton-io/http/query_unescape'], function (exports, module, _framptonUtilsMemoize, _framptonIoHttpQuery_unescape) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _queryUnescape = _interopRequireDefault(_framptonIoHttpQuery_unescape);

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
define('frampton-history/path', ['exports', 'module', 'frampton-signals/stepper', 'frampton-history/get_location', 'frampton-history/path_stream'], function (exports, module, _framptonSignalsStepper, _framptonHistoryGet_location, _framptonHistoryPath_stream) {
  'use strict';

  module.exports = path;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _stepper = _interopRequireDefault(_framptonSignalsStepper);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var _pathStream = _interopRequireDefault(_framptonHistoryPath_stream);

  var instance = null;

  /**
   * A Behavior representing the current location.pathname
   *
   * @name path
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signals.Behavior}
   */

  function path() {
    if (!instance) {
      instance = _stepper['default'](_location['default']().pathname, _pathStream['default']());
    }
    return instance;
  }
});
define('frampton-history/path_stream', ['exports', 'module', 'frampton-history/location_stream'], function (exports, module, _framptonHistoryLocation_stream) {
  'use strict';

  module.exports = path_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _locationStream = _interopRequireDefault(_framptonHistoryLocation_stream);

  var instance = null;

  /**
   * Returns an EventStream of updates to location.pathname
   *
   * @name pathStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function path_stream() {
    if (!instance) {
      instance = _locationStream['default']().map(function (loc) {
        return loc.pathname;
      });
    }
    return instance;
  }
});
define('frampton-history/popstate_stream', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-events/listen', 'frampton-history/history_stack'], function (exports, module, _framptonUtilsIs_nothing, _framptonEventsListen, _framptonHistoryHistory_stack) {
  'use strict';

  module.exports = popstate_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var instance = null;

  /**
   * Returns a stream of popstate events. Also helps to internally keep track of
   * the current depth of the history stack.
   *
   * @name popstateStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function popstate_stream() {

    if (!window.history || !window.history.pushState) {
      throw new Error('History API is not supported by this browser');
    }

    if (_isNothing['default'](instance)) {
      instance = _framptonEventsListen.listen('popstate', window).map(function (evt) {
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
define('frampton-history/search', ['exports', 'module', 'frampton-signals/stepper', 'frampton-history/get_location', 'frampton-history/search_stream', 'frampton-history/parse_search'], function (exports, module, _framptonSignalsStepper, _framptonHistoryGet_location, _framptonHistorySearch_stream, _framptonHistoryParse_search) {
  'use strict';

  module.exports = search;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _stepper = _interopRequireDefault(_framptonSignalsStepper);

  var _location = _interopRequireDefault(_framptonHistoryGet_location);

  var _searchStream = _interopRequireDefault(_framptonHistorySearch_stream);

  var _parseSearch = _interopRequireDefault(_framptonHistoryParse_search);

  var instance = null;

  /**
   * A Behavior representing the current location.search
   *
   * @name search
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signals.Behavior}
   */

  function search() {
    if (!instance) {
      instance = _stepper['default'](_parseSearch['default'](_location['default']().search || ''), _searchStream['default']());
    }
    return instance;
  }
});
define('frampton-history/search_stream', ['exports', 'module', 'frampton-history/location_stream', 'frampton-history/parse_search'], function (exports, module, _framptonHistoryLocation_stream, _framptonHistoryParse_search) {
  'use strict';

  module.exports = hash_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _locationStream = _interopRequireDefault(_framptonHistoryLocation_stream);

  var _parseSearch = _interopRequireDefault(_framptonHistoryParse_search);

  var instance = null;

  /**
   * Returns an EventStream of updates to location.search
   *
   * @name searchStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function hash_stream() {
    if (!instance) {
      instance = _locationStream['default']().map(function (loc) {
        return _parseSearch['default'](loc.search || '');
      });
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
define('frampton-history/stack_stream', ['exports', 'module', 'frampton-utils/is_nothing', 'frampton-signals/empty'], function (exports, module, _framptonUtilsIs_nothing, _framptonSignalsEmpty) {
  'use strict';

  module.exports = stack_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isNothing = _interopRequireDefault(_framptonUtilsIs_nothing);

  var _empty = _interopRequireDefault(_framptonSignalsEmpty);

  var instance = null;

  /**
   * EventStream of changes to the history stack
   *
   * @name stackStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function stack_stream() {

    if (_isNothing['default'](instance)) {
      instance = _empty['default']();
    }

    return instance;
  }
});
define('frampton-history/state', ['exports', 'module', 'frampton-signals/stepper', 'frampton-history/get_history', 'frampton-history/state_stream'], function (exports, module, _framptonSignalsStepper, _framptonHistoryGet_history, _framptonHistoryState_stream) {
  'use strict';

  module.exports = state;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _stepper = _interopRequireDefault(_framptonSignalsStepper);

  var _history = _interopRequireDefault(_framptonHistoryGet_history);

  var _stateStream = _interopRequireDefault(_framptonHistoryState_stream);

  var instance = null;

  /**
   * A Behavior representing the current history.state
   *
   * @name state
   * @method
   * @memberof Frampton.History
   * @returns {Frampton.Signals.Behavior}
   */

  function state() {
    if (!instance) {
      instance = _stepper['default'](_history['default']().state, _stateStream['default']());
    }
    return instance;
  }
});
define('frampton-history/state_stream', ['exports', 'module', 'frampton-history/history_stream'], function (exports, module, _framptonHistoryHistory_stream) {
  'use strict';

  module.exports = state_stream;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _historyStream = _interopRequireDefault(_framptonHistoryHistory_stream);

  var instance = null;

  /**
   * Returns an EventStream of updates to history.state
   *
   * @name stateStream
   * @method
   * @private
   * @memberof Frampton.History
   * @returns {Frampton.Signals.EventStream}
   */

  function state_stream() {
    if (!instance) {
      instance = _historyStream['default']().map(function (h) {
        return h.state;
      });
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