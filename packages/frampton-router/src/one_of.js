import Just from 'frampton-data/maybe/just';
import Nothing from 'frampton-data/maybe/nothing';

// match : [ Parser ] -> String -> Maybe a
function match(parsers, path) {
  const [ parser, ...tail ] = parsers;
  return parser(path).fork(
    (val) => Just(val),
    () => {
      if (parsers.length > 1) {
        return match(tail, path);
      } else {
        return Nothing();
      }
    }
  );
}

// oneOf : [ Parser ] -> Parser
export default (parsers) => {
  return (path) => match(parsers, path);
};
