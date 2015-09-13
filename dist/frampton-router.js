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
  _Frampton['default'].Router.VERSION = 'VERSION_PLACEHOLDER';
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
define('frampton-router/join_path', ['exports', 'module', 'frampton-string/join'], function (exports, module, _framptonStringJoin) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _join = _interopRequireDefault(_framptonStringJoin);

  module.exports = _join['default']('/');
});
define('frampton-router/match', ['exports', 'module', 'frampton-utils/curry', 'frampton-list/drop', 'frampton-string/join', 'frampton-string/starts_with', 'frampton-router/split_path', 'frampton-router/dynamic_path'], function (exports, module, _framptonUtilsCurry, _framptonListDrop, _framptonStringJoin, _framptonStringStarts_with, _framptonRouterSplit_path, _framptonRouterDynamic_path) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _drop = _interopRequireDefault(_framptonListDrop);

  var _join = _interopRequireDefault(_framptonStringJoin);

  var _startsWith = _interopRequireDefault(_framptonStringStarts_with);

  var _splitPath = _interopRequireDefault(_framptonRouterSplit_path);

  var _dynamicPath = _interopRequireDefault(_framptonRouterDynamic_path);

  function isIndex(routePath, currentPath) {
    return routePath === '/' && (currentPath === '/' || _startsWith['default']('index.', currentPath));
  }

  function matchPath(routePath, currentPath) {
    return isIndex(routePath, currentPath) || routePath === currentPath || routePath === '/' + currentPath;
  }

  /**
   * match :: List (Router a) -> Route a -> Route a
   * @name match
   * @method
   * @memberof Frampton.Router
   * @param {Array} routes
   * @param {String} path
   */
  module.exports = _curry['default'](function match(routes, path) {

    var paths = _splitPath['default'](path);
    var currentPath = paths[0] || '/';

    for (var i = 0; i < routes.length; i++) {

      var routePath = routes[i].path;
      var routeFn = routes[i].fn;

      if (matchPath(routePath, currentPath)) {
        return routeFn(_join['default']('/', _drop['default'](1, paths)));
      } else if (_startsWith['default']('/:', routePath)) {
        return routeFn(_join['default']('/', _drop['default'](1, paths)), currentPath);
      }
    }
  });
});
define("frampton-router/route", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = create_route;
  function confirm() {
    return true;
  }

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
      path: path,
      fn: function fn(path) {
        return _fn.apply(null, [path]);
      },
      _isRoute: confirm
    };
  }
});
define('frampton-router/route_change', ['exports', 'module', 'frampton-events/listen'], function (exports, module, _framptonEventsListen) {
  'use strict';

  module.exports = route_change;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _listen = _interopRequireDefault(_framptonEventsListen);

  function route_change() {}
});
define('frampton-router/router', ['exports', 'module', 'frampton-utils/curry', 'frampton-router/match'], function (exports, module, _framptonUtilsCurry, _framptonRouterMatch) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _curry = _interopRequireDefault(_framptonUtilsCurry);

  var _match = _interopRequireDefault(_framptonRouterMatch);

  // EventStream Route || Behavior Route
  // pushRoute
  // replaceRoute
  // when route changes, what do we do?
  // sub routes /route/sub_route
  // resource/route
  // router String -> Route a
  // route String -> Html
  // path change ->
  // route can have nested routes
  // match route

  // Outlet :: DomNode
  // Route :: String -> Html
  // Router :: String -> Route a
  module.exports = _curry['default'](function create_router(base, routes, path) {
    return _match['default'](routes, path.replace(base, ''));
  });
});
define('frampton-router/routes', ['exports', 'module', 'frampton-history/path', 'frampton-router/split_path'], function (exports, module, _framptonHistoryPath, _framptonRouterSplit_path) {
  'use strict';

  module.exports = routes;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _path = _interopRequireDefault(_framptonHistoryPath);

  var _splitPath = _interopRequireDefault(_framptonRouterSplit_path);

  var instance = null;

  /**
   * @name routes
   * @method
   * @memberof Frampton.Router
   * @returns {Frampton.Signals.Behavior}
   */

  function routes() {
    if (!instance) {
      instance = _path['default']().map(_splitPath['default']);
    }
    return instance;
  }
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

})();