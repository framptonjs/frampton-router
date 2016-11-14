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
define('frampton-router', ['frampton/namespace', 'frampton-router/router', 'frampton-router/route', 'frampton-router/match'], function (_namespace, _router, _route, _match) {
  'use strict';

  var _namespace2 = _interopRequireDefault(_namespace);

  var _router2 = _interopRequireDefault(_router);

  var _route2 = _interopRequireDefault(_route);

  var _match2 = _interopRequireDefault(_match);

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
  _namespace2.default.Router.VERSION = '0.0.3';
  _namespace2.default.Router.match = _match2.default;
  _namespace2.default.Router.create = _router2.default;
  _namespace2.default.Router.route = _route2.default;
});
define('frampton-router/dynamic_path', ['exports', 'frampton-utils/memoize', 'frampton-string/replace'], function (exports, _memoize, _replace) {
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
define('frampton-router/is_dynamic_path', ['exports', 'frampton-utils/memoize', 'frampton-string/starts_with'], function (exports, _memoize, _starts_with) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  var _starts_with2 = _interopRequireDefault(_starts_with);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)((0, _starts_with2.default)(':'));
});
define('frampton-router/is_index', ['exports', 'frampton-string/starts_with'], function (exports, _starts_with) {
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

  function is_index(routePath, currentPath) {
    return routePath === '/' && (currentPath === '/' || (0, _starts_with2.default)('index.', currentPath));
  }
});
define('frampton-router/join_path', ['exports', 'frampton-string/join'], function (exports, _join) {
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
define('frampton-router/match', ['exports', 'frampton-utils/curry', 'frampton-router/match_route'], function (exports, _curry, _match_route) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  var _match_route2 = _interopRequireDefault(_match_route);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function (routes, path) {
    for (var i = 0; i < routes.length; i++) {
      var route = routes[i];
      var tokens = (0, _match_route2.default)(route.path, path);
      if (tokens) {
        return route.fn.apply(null, tokens);
      }
    }
  });
});
define('frampton-router/match_route', ['exports', 'frampton-router/split_path', 'frampton-router/is_index', 'frampton-router/is_dynamic_path'], function (exports, _split_path, _is_index, _is_dynamic_path) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = match_route;

  var _split_path2 = _interopRequireDefault(_split_path);

  var _is_index2 = _interopRequireDefault(_is_index);

  var _is_dynamic_path2 = _interopRequireDefault(_is_dynamic_path);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function match_route(route, path) {

    var routeParts = (0, _split_path2.default)(route);
    var pathParts = (0, _split_path2.default)(path);
    var rLen = routeParts.length;
    var pLen = pathParts.length;
    var len = rLen > pLen ? rLen : pLen;
    var tokens = [];

    for (var j = 0; j < len; j++) {

      var currentRoutePart = routeParts[j] || '';
      var currentPathPart = pathParts[j];

      if (currentRoutePart && currentPathPart) {
        if ((0, _is_dynamic_path2.default)(currentRoutePart)) {
          if (currentRoutePart === ':number' && isNaN(parseInt(currentPathPart))) {
            return null;
          } else if (currentRoutePart === ':string' && !isNaN(parseInt(currentPathPart))) {
            return null;
          }
          tokens.push(currentPathPart);
        } else if (currentRoutePart !== currentPathPart) {
          return null;
        }
      } else if ((0, _is_index2.default)(currentRoutePart, currentPathPart)) {
        return tokens;
      } else {
        tokens.length = 0;
        return null;
      }
    }

    return tokens;
  }
});
define('frampton-router/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @name route
   * @method
   * @memberof Frampton.Router
   * @param {String} path
   * @param {Function} fn
   * @returns {Object}
   */
  function create_route(path, _fn) {
    return {
      ctor: 'Frampton.Router.Route',
      path: path,
      fn: function fn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _fn.apply(null, args);
      }
    };
  }
  exports.default = create_route;
});
define('frampton-router/router', ['exports', 'frampton-utils/curry', 'frampton-router/match'], function (exports, _curry, _match) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  var _match2 = _interopRequireDefault(_match);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function create_router(base, routes, path) {
    return (0, _match2.default)(routes, path.replace(base, ''));
  });
});
define('frampton-router/split_path', ['exports', 'frampton-utils/compose', 'frampton-utils/memoize', 'frampton-string/split', 'frampton-list/filter'], function (exports, _compose, _memoize, _split, _filter) {
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
