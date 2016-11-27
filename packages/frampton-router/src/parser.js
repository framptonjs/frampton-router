import splitPath from 'frampton-router/utils/split_path';
import match from 'frampton-router/utils/match';

// parser : String -> ( String -> Maybe a )
export default (format) => {
  const formatParts = splitPath(format);
  return (path) => {
    const pathParts = splitPath(path);
    return match(formatParts, pathParts);
  };
};
