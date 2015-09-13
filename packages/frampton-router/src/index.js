import Frampton from 'frampton/namespace';
import router from 'frampton-router/router';
import route from 'frampton-router/route';
import match from 'frampton-router/match';

/**
 * @name Router
 * @namespace
 * @memberof Frampton
 */
Frampton.Router         = {};
Frampton.Router.VERSION = 'VERSION_PLACEHOLDER';
Frampton.Router.match   = match;
Frampton.Router.create  = router;
Frampton.Router.route   = route;