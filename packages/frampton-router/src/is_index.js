import startsWith from 'frampton-string/starts_with';

export default function is_index(routePath, currentPath) {
  return (
    (routePath === '/') &&
    (
      (currentPath === '/') ||
      (startsWith('index.', currentPath))
    )
  );
}