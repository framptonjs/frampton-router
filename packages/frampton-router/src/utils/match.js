import Just from 'frampton-data/maybe/just';
import Nothing from 'frampton-data/maybe/nothing';
import isIndex from 'frampton-router/utils/is_index';
import isNumeric from 'frampton-utils/is_numeric';

export default (formatParts, pathParts) => {
  const pathLen = pathParts.length;
  const formatLen = formatParts.length;
  const tokens = [];

  if (pathLen < formatLen) {
    return Nothing();
  }

  for (let i = 0; i < pathLen; i++) {
    const path = pathParts[i];
    const format = formatParts[i];
    if (format !== undefined) {
      if (format === ':number' && isNumeric(path)) {
        tokens.push(parseInt(path));
      } else if (format === ':string') {
        tokens.push(path);
      } else if (format !== path) {
        return Nothing();
      }
    } else {
      if (isIndex(pathParts[i])) {
        return Just(tokens);
      } else {
        return Nothing();
      }
    }
  }

  return Just(tokens);
};
