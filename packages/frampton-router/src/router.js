import curry from 'frampton-utils/curry';
import match from 'frampton-router/match';

export default curry(function create_router(base, routes, path) {
  return match(routes, path.replace(base, ''));
});