import curry from 'frampton-utils/curry';
import match from 'frampton-router/match';

// EventStream Route || Behavior Route
// pushRoute
// replaceRoute
// when route changes, what do we do?
// sub routes /route/sub_route
// resource/route
// router String -> Route a
// route String -> Html
// path change ->
// route can have nested routes
// match route

// Outlet :: DomNode
// Route :: String -> Html
// Router :: String -> Route a
export default curry(function create_router(base, routes, path) {
  return match(routes, path.replace(base, ''));
});