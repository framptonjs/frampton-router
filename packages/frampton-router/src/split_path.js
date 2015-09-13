import compose from 'frampton-utils/compose';
import memoize from 'frampton-utils/memoize';
import split from 'frampton-string/split';
import filter from 'frampton-list/filter';

var notEmpty = function(str) {
  return (str.trim() !== '');
};

/**
 * @name splitPath
 * @method
 * @private
 * @memberof Frampton.Router
 * @param {String} path A path string to split
 * @returns {Array}
 */
export default memoize(compose(filter(notEmpty), split('/')));