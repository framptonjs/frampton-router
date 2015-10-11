import curry from 'frampton-utils/curry';
import matchRoute from 'frampton-router/match_route';

/**
 * match :: Route[] -> String -> a
 * @name match
 * @method
 * @memberof Frampton.Router
 * @param {Array} routes
 * @param {String} path
 */
export default curry((routes, path) => {
  for (let i=0;i<routes.length;i++) {
    let route = routes[i];
    let tokens = matchRoute(route.path, path);
    if (tokens) {
      return route.fn.apply(null, tokens);
    }
  }
});