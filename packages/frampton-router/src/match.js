import curry from 'frampton-utils/curry';
import drop from 'frampton-list/drop';
import join from 'frampton-string/join';
import startsWith from 'frampton-string/starts_with';
import splitPath from 'frampton-router/split_path';
import dynamicPath from 'frampton-router/dynamic_path';

function isIndex(routePath, currentPath) {
  return (
    (routePath === '/') &&
    (
      (currentPath === '/') ||
      (startsWith('index.', currentPath))
    )
  );
}

function matchPath(routePath, currentPath) {
  return (
    (isIndex(routePath, currentPath)) ||
    (routePath === currentPath) ||
    (routePath === ('/' + currentPath))
  );
}

/**
 * match :: List (Router a) -> Route a -> Route a
 * @name match
 * @method
 * @memberof Frampton.Router
 * @param {Array} routes
 * @param {String} path
 */
export default curry(function match(routes, path) {

  var paths = splitPath(path);
  var currentPath = (paths[0] || '/');

  for (let i=0;i<routes.length;i++) {

    let routePath = routes[i].path;
    let routeFn = routes[i].fn;

    if (matchPath(routePath, currentPath)) {
      return (routeFn(join('/', drop(1, paths))));
    } else if (startsWith('/:', routePath)) {
      return (routeFn(join('/', drop(1, paths)), currentPath));
    }
  }
});