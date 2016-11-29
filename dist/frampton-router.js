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
define('frampton-router', ['frampton/namespace', 'frampton-router/parser', 'frampton-router/one_of', 'frampton-router/map', 'frampton-router/app'], function (_namespace, _parser, _one_of, _map, _app) {
  'use strict';

  var _namespace2 = _interopRequireDefault(_namespace);

  var _parser2 = _interopRequireDefault(_parser);

  var _one_of2 = _interopRequireDefault(_one_of);

  var _map2 = _interopRequireDefault(_map);

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @name Router
   * @namespace
   * @memberof Frampton
   */
  _namespace2.default.Router = {};
  _namespace2.default.Router.VERSION = '0.1.0';
  _namespace2.default.Router.parser = _parser2.default;
  _namespace2.default.Router.oneOf = _one_of2.default;
  _namespace2.default.Router.map = _map2.default;
  _namespace2.default.Router.app = _app2.default;
});
define('frampton-router/app', ['exports', 'frampton-list/prepend', 'frampton-list/first', 'frampton-list/second', 'frampton-data/union/create', 'frampton-data/task/execute', 'frampton-signal/create', 'frampton-dom/scene', 'frampton-history/utils/get_location', 'frampton-history/signals/location'], function (exports, _prepend, _first, _second, _create, _execute, _create3, _scene, _get_location, _location) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = routing_app;

  var _prepend2 = _interopRequireDefault(_prepend);

  var _first2 = _interopRequireDefault(_first);

  var _second2 = _interopRequireDefault(_second);

  var _create2 = _interopRequireDefault(_create);

  var _execute2 = _interopRequireDefault(_execute);

  var _create4 = _interopRequireDefault(_create3);

  var _scene2 = _interopRequireDefault(_scene);

  var _get_location2 = _interopRequireDefault(_get_location);

  var _location2 = _interopRequireDefault(_location);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Messages = (0, _create2.default)({
    UrlUpdate: ['location'],
    UserAction: ['action']
  });

  /**
   * {
   *   update : Function,
   *   urlUpdate : Function,
   *   urlParser : Function,
   *   view : Function,
   *   init : Function,
   *   inputs : []
   * }
   */
  function routing_app(config) {

    if (typeof _scene2.default !== 'function') {
      throw new Error('Frampton.App.withView requires Frampton.DOM');
    }

    function update(acc, msg) {
      var model = acc[0];
      return Messages.match({
        UserAction: function UserAction(action) {
          return config.update(action, model);
        },
        UrlUpdate: function UrlUpdate(location) {
          return config.urlUpdate(config.urlParser(location), model);
        }
      }, msg);
    }

    var messages = (0, _create4.default)();
    var initialState = config.init(config.urlParser((0, _get_location2.default)()));
    var inputs = config.inputs || [];
    var userInputs = (0, _create3.mergeMany)((0, _prepend2.default)(inputs, messages)).map(Messages.UserAction);
    var locationChange = _location2.default.map(Messages.UrlUpdate);
    var allInputs = userInputs.merge(locationChange);
    var stateAndTasks = allInputs.fold(update, initialState);
    var state = stateAndTasks.map(_first2.default);
    var tasks = stateAndTasks.map(_second2.default);

    var schedule = (0, _scene2.default)(config.rootElement, messages.push);
    var html = state.map(function (next) {
      return config.view(next);
    });

    html.value(schedule);

    // Run tasks and publish any resulting actions back into messages
    (0, _execute2.default)(tasks, messages.push);

    return state;
  }
});
define('frampton-router/int', ['exports', 'frampton-router/parser'], function (exports, _parser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _parser2 = _interopRequireDefault(_parser);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _parser2.default)(':number');
});
define('frampton-router/map', ['exports', 'frampton-utils/curry'], function (exports, _curry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function (mapping, parser) {
    return function (path) {
      return parser(path).map(mapping);
    };
  });
});
define('frampton-router/one_of', ['exports', 'frampton-data/maybe/just', 'frampton-data/maybe/nothing'], function (exports, _just, _nothing) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _just2 = _interopRequireDefault(_just);

  var _nothing2 = _interopRequireDefault(_nothing);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  // match : [ Parser ] -> String -> Maybe a
  function match(parsers, path) {
    var _parsers = _toArray(parsers),
        parser = _parsers[0],
        tail = _parsers.slice(1);

    return parser(path).fork(function (val) {
      return (0, _just2.default)(val);
    }, function () {
      if (parsers.length > 1) {
        return match(tail, path);
      } else {
        return (0, _nothing2.default)();
      }
    });
  }

  // oneOf : [ Parser ] -> Parser

  exports.default = function (parsers) {
    return function (path) {
      return match(parsers, path);
    };
  };
});
define('frampton-router/parser', ['exports', 'frampton-router/utils/split_path', 'frampton-router/utils/match'], function (exports, _split_path, _match) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _split_path2 = _interopRequireDefault(_split_path);

  var _match2 = _interopRequireDefault(_match);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (format) {
    var formatParts = (0, _split_path2.default)(format);
    return function (path) {
      var pathParts = (0, _split_path2.default)(path);
      return (0, _match2.default)(formatParts, pathParts);
    };
  };
});
define('frampton-router/string', ['exports', 'frampton-router/parser'], function (exports, _parser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _parser2 = _interopRequireDefault(_parser);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _parser2.default)(':string');
});
define('frampton-router/utils/dynamic_path', ['exports', 'frampton-utils/memoize', 'frampton-string/replace'], function (exports, _memoize, _replace) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  var _replace2 = _interopRequireDefault(_replace);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)((0, _replace2.default)('', '/:'));
});
define('frampton-router/utils/is_index', ['exports', 'frampton-string/starts_with'], function (exports, _starts_with) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = is_index;

  var _starts_with2 = _interopRequireDefault(_starts_with);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function is_index(path) {
    return path === '' || path === '/' || (0, _starts_with2.default)('index.', path);
  }
});
define('frampton-router/utils/join_path', ['exports', 'frampton-string/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _join2 = _interopRequireDefault(_join);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _join2.default)('/');
});
define('frampton-router/utils/match', ['exports', 'frampton-data/maybe/just', 'frampton-data/maybe/nothing', 'frampton-router/utils/is_index', 'frampton-utils/is_numeric'], function (exports, _just, _nothing, _is_index, _is_numeric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _just2 = _interopRequireDefault(_just);

  var _nothing2 = _interopRequireDefault(_nothing);

  var _is_index2 = _interopRequireDefault(_is_index);

  var _is_numeric2 = _interopRequireDefault(_is_numeric);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (formatParts, pathParts) {
    var pathLen = pathParts.length;
    var formatLen = formatParts.length;
    var tokens = [];

    if (pathLen < formatLen) {
      return (0, _nothing2.default)();
    }

    for (var i = 0; i < pathLen; i++) {
      var path = pathParts[i];
      var format = formatParts[i];
      if (format !== undefined) {
        if (format === ':number' && (0, _is_numeric2.default)(path)) {
          tokens.push(parseInt(path));
        } else if (format === ':string') {
          tokens.push(path);
        } else if (format !== path) {
          return (0, _nothing2.default)();
        }
      } else {
        if ((0, _is_index2.default)(pathParts[i])) {
          return (0, _just2.default)(tokens);
        } else {
          return (0, _nothing2.default)();
        }
      }
    }

    return (0, _just2.default)(tokens);
  };
});
define('frampton-router/utils/split_path', ['exports', 'frampton-utils/compose', 'frampton-utils/memoize', 'frampton-string/split', 'frampton-list/filter'], function (exports, _compose, _memoize, _split, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _compose2 = _interopRequireDefault(_compose);

  var _memoize2 = _interopRequireDefault(_memoize);

  var _split2 = _interopRequireDefault(_split);

  var _filter2 = _interopRequireDefault(_filter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var notEmpty = function notEmpty(str) {
    return str.trim() !== '';
  };

  /**
   * @name splitPath
   * @method
   * @private
   * @memberof Frampton.Router
   * @param {String} path A path string to split
   * @returns {Array}
   */
  exports.default = (0, _memoize2.default)((0, _compose2.default)((0, _filter2.default)(notEmpty), (0, _split2.default)('/')));
});
require("frampton-router");
})();
