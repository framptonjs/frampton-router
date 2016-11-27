import Frampton from 'frampton/namespace';
import parser from 'frampton-router/parser';
import oneOf from 'frampton-router/one_of';
import map from 'frampton-router/map';
import app from 'frampton-router/app';

/**
 * @name Router
 * @namespace
 * @memberof Frampton
 */
Frampton.Router         = {};
Frampton.Router.VERSION = '{-- VERSION_PLACEHOLDER --}';
Frampton.Router.parser  = parser;
Frampton.Router.oneOf   = oneOf;
Frampton.Router.map     = map;
Frampton.Router.app     = app;
