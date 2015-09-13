import memoize from 'frampton-utils/memoize';
import replace from 'frampton-string/replace';

export default memoize(replace('', '/:'));