import path from 'frampton-history/path';
import splitPath from 'frampton-router/split_path';

var instance = null;

/**
 * @name routes
 * @method
 * @memberof Frampton.Router
 * @returns {Frampton.Signals.Behavior}
 */
export default function routes() {
  if (!instance) {
    instance = path().map(splitPath);
  }
  return instance;
}