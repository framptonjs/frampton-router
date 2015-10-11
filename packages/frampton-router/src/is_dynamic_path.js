import memoize from 'frampton-utils/memoize';
import startsWith from 'frampton-string/starts_with';

export default memoize(startsWith(':'));