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
export default function create_route(path, fn) {
  return {
    path : path,
    fn : function(path, ...args) {
      return fn.apply(null, [path]);
    },
    _isRoute : confirm
  };
}