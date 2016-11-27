import curry from 'frampton-utils/curry';

// map : mapping -> parser -> parser
export default curry((mapping, parser) => {
  return (path) => parser(path).map(mapping);
});
