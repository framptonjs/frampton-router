import splitPath from 'frampton-router/split_path';
import isIndex from 'frampton-router/is_index';
import isDynamicPath from 'frampton-router/is_dynamic_path';

export default function match_route(route, path) {

  var routeParts = splitPath(route);
  var pathParts = splitPath(path);
  var rLen = routeParts.length;
  var pLen = pathParts.length;
  var len = ((rLen > pLen) ? rLen : pLen);
  var tokens = [];

  for (let j=0; j<len; j++) {

    let currentRoutePart = (routeParts[j] || '');
    let currentPathPart = pathParts[j];

    if (currentRoutePart && currentPathPart) {
      if (isDynamicPath(currentRoutePart)) {
        if (currentRoutePart === ':number' && isNaN(parseInt(currentPathPart))) {
          return null;
        } else if (currentRoutePart === ':string' && !isNaN(parseInt(currentPathPart))) {
          return null;
        }
        tokens.push(currentPathPart);
      } else if (currentRoutePart !== currentPathPart) {
        return null;
      }
    } else if (isIndex(currentRoutePart, currentPathPart)) {
      return tokens;
    } else {
      tokens.length = 0;
      return null;
    }
  }

  return tokens;
}