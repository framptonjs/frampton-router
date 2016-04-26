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
define('frampton-router', ['exports', 'frampton/namespace', 'frampton-router/router', 'frampton-router/route', 'frampton-router/match'], function (exports, _framptonNamespace, _framptonRouterRouter, _framptonRouterRoute, _framptonRouterMatch) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Frampton = _interopRequireDefault(_framptonNamespace);

  var _router = _interopRequireDefault(_framptonRouterRouter);

  var _route = _interopRequireDefault(_framptonRouterRoute);

  var _match = _interopRequireDefault(_framptonRouterMatch);

  /**
   * @name Router
   * @namespace
   * @memberof Frampton
   */
  _Frampton['default'].Router = {};
  _Frampton['default'].Router.VERSION = '0.0.3';
  _Frampton['default'].Router.match = _match['default'];
  _Frampton['default'].Router.create = _router['default'];
  _Frampton['default'].Router.route = _route['default'];
});
define('frampton-router/dynamic_path', ['exports', 'module', 'frampton-utils/memoize', 'frampton-string/replace'], function (exports, module, _framptonUtilsMemoize, _framptonStringReplace) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _replace = _interopRequireDefault(_framptonStringReplace);

  module.exports = _memoize['default'](_replace['default']('', '/:'));
});
define('frampton-router/is_dynamic_path', ['exports', 'module', 'frampton-utils/memoize', 'frampton-string/starts_with'], function (exports, module, _framptonUtilsMemoize, _framptonStringStarts_with) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _startsWith = _interopRequireDefault(_framptonStringStarts_with);

  module.exports = _memoize['default'](_startsWith['default'](':'));
});
define('frampton-router/is_index', ['exports', 'module', 'frampton-string/starts_with'], function (exports, module, _framptonStringStarts_with) {
  'use strict';

  module.exports = is_index;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _startsWith = _interopRequireDefault(_framptonStringStarts_with);

  function is_index(routePath, currentPath) {
    return routePath === '/' && (currentPath === '/' || _startsWith['default']('index.', currentPath));
  }
});
define('frampton-router/join_path', ['exports', 'module', 'frampton-string/join'], function (exports, module, _framptonStringJoin) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _join = _interopRequireDefault(_framptonStringJoin);

  module.exports = _join['default']('/');
});
define('frampton-router/match_route', ['exports', 'module', 'frampton-router/split_path', 'frampton-router/is_index', 'frampton-router/is_dynamic_path'], function (exports, module, _framptonRouterSplit_path, _framptonRouterIs_index, _framptonRouterIs_dynamic_path) {
  'use strict';

  module.exports = match_route;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _splitPath = _interopRequireDefault(_framptonRouterSplit_path);

  var _isIndex = _interopRequireDefault(_framptonRouterIs_index);

  var _isDynamicPath = _interopRequireDefault(_framptonRouterIs_dynamic_path);

  function match_route(route, path) {

    var routeParts = _splitPath['default'](route);
    var pathParts = _splitPath['default'](path);
    var rLen = routeParts.length;
    var pLen = pathParts.length;
    var len = rLen > pLen ? rLen : pLen;
    var tokens = [];

    for (var j = 0; j < len; j++) {

      var currentRoutePart = routeParts[j] || '';
      var currentPathPart = pathParts[j];

      if (currentRoutePart && currentPathPart) {
        if (_isDynamicPath['default'](currentRoutePart)) {
          if (currentRoutePart === ':number' && isNaN(parseInt(currentPathPart))) {
            return null;
          } else if (currentRoutePart === ':string' && !isNaN(parseInt(currentPathPart))) {
            return null;
          }
          tokens.push(currentPathPart);
        } else if (currentRoutePart !== currentPathPart) {
          return null;
        }
      } else if (_isIndex['default'](currentRoutePart, currentPathPart)) {
        return tokens;
      } else {
        tokens.length = 0;
        return null;
      }
    }

    return tokens;
  }
});
define('frampton-router/match', ['exports', 'module', 'frampton-utils/curry', 'frampton-router/match_route'], function (exports, module, _framptonUtilsCurry, _framptonRouterMatch_route) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _matchRoute = _interopRequireDefault(_framptonRouterMatch_route);

  /**
   * match :: Route[] -> String -> a
   * @name match
   * @method
   * @memberof Frampton.Router
   * @param {Array} routes
   * @param {String} path
   */
  module.exports = _curry['default'](function (routes, path) {
    for (var i = 0; i < routes.length; i++) {
      var route = routes[i];
      var tokens = _matchRoute['default'](route.path, path);
      if (tokens) {
        return route.fn.apply(null, tokens);
      }
    }
  });
});
define("frampton-router/route", ["exports", "module"], function (exports, module) {
  /**
   * @name route
   * @method
   * @memberof Frampton.Router
   * @param {String} path
   * @param {Function} fn
   * @returns {Object}
   */
  "use strict";

  module.exports = create_route;

  function create_route(path, _fn) {
    return {
      path: path,
      fn: function fn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _fn.apply(null, args);
      },
      _isRoute: true
    };
  }
});
define('frampton-router/router', ['exports', 'module', 'frampton-utils/curry', 'frampton-router/match'], function (exports, module, _framptonUtilsCurry, _framptonRouterMatch) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _match = _interopRequireDefault(_framptonRouterMatch);

  module.exports = _curry['default'](function create_router(base, routes, path) {
    return _match['default'](routes, path.replace(base, ''));
  });
});
define('frampton-router/split_path', ['exports', 'module', 'frampton-utils/compose', 'frampton-utils/memoize', 'frampton-string/split', 'frampton-list/filter'], function (exports, module, _framptonUtilsCompose, _framptonUtilsMemoize, _framptonStringSplit, _framptonListFilter) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _compose = _interopRequireDefault(_framptonUtilsCompose);

  var _memoize = _interopRequireDefault(_framptonUtilsMemoize);

  var _split = _interopRequireDefault(_framptonStringSplit);

  var _filter = _interopRequireDefault(_framptonListFilter);

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
  module.exports = _memoize['default'](_compose['default'](_filter['default'](notEmpty), _split['default']('/')));
});
require("frampton-router");

}());