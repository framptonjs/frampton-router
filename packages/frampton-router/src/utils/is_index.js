import startsWith from 'frampton-string/starts_with';

export default function is_index(path) {
  return (
    (path === '') ||
    (path === '/') ||
    (startsWith('index.', path))
  );
}
