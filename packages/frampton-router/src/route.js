/**
 * @name route
 * @method
 * @memberof Frampton.Router
 * @param {String} path
 * @param {Function} fn
 * @returns {Object}
 */
export default function create_route(path, fn) {
  return {
    path : path,
    fn : (...args) => {
      return fn.apply(null, args);
    },
    _isRoute : true
  };
}