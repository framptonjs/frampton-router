# Frampton-Router

## Parsers

Create a parser to match a path. A parser is a function that takes a path and returns a Maybe. If the parser matches the path the function returns a Just, otherwise a Nothing. When you create a parser you give it a string describing the format of the path to match. The parser matches most string exactly with strict equals. However, if you use the dynamic path segments of ':number' or ':string' the parser will match the dynamic segment and return it as the value of the Just. The value of the Just is always an array. If there are no dynamic segments the array is empty. If there are dynamic segments they are returned in the array in the order in which they occur in the path.

```
const parser = Frampton.Router.parser;

const postParser = parser('/post/:number');
const maybeMatch1 = postParser('/post/34');
const maybeMatch2 = postParser('/fake/route');
console.log(maybeMatch1); // -> 'Just(34)'
console.log(maybeMatch2); // -> 'Nothing'
```

To create a parser that matches on of many patterns use the oneOf helper.

```
const oneOf = Frampton.Router.oneOf;
const parser = Frampton.Router.parser;

const postListParser = parser('/post');
const postDetailParser = parser('post/:number');
const postEditParser = parser('post/:number/edit');
const postRouteParser = oneOf([ postListParser, postDetailParser, postEditParser ]);

const maybeMatch1 = postRouteParser('/post');
const maybeMatch2 = postRouteParser('/post/34');
const maybeMatch3 = postRouteParser('/post/34/edit');

console.log(maybeMatch1); // -> 'Just()'
console.log(maybeMatch2); // -> 'Just(34)'
console.log(maybeMatch3); // -> 'Just(34)'
```

That's all well and good, but how do we tell which of the parsers actually matched? We can use the map function to tag the matched route and format the return data.

```
const map = Frampton.Router.map;
const oneOf = Frampton.Router.oneOf;
const parser = Frampton.Router.parser;

const tagPostList = () => ({
    route: 'PostList'
  });

const tagPostDetail = (data) => ({
    route: 'PostDetail',
    id: data[0]
  });

const tagPostEdit = (data) => ({
    route: 'PostEdit',
    id: data[0]
  });

const postListParser = map(tagPostList, parser('/post'));
const postDetailParser = map(tagPostDetail, parser('post/:number'));
const postEditParser = map(tagPostEdit, parser('post/:number/edit'));
const postRouteParser = oneOf([ postListParser, postDetailParser, postEditParser ]);

const maybeMatch1 = postRouteParser('/post');
const maybeMatch2 = postRouteParser('/post/34');
const maybeMatch3 = postRouteParser('/post/34/edit');

console.log(maybeMatch1); // -> 'Just({ route: 'PostList' })'
console.log(maybeMatch2); // -> 'Just({ route: 'PostDetail', id: 34 })'
console.log(maybeMatch3); // -> 'Just({ route: 'PostEdit', id: 34 })'
```

## App

An app handles a lot of the boiler plate wiring required when setting up a single page app. When the app starts up the app will call a urlParser function you provide to determine the correct route. The value returned by the parser function is expected to indicate to your app what to do and what to render. This return value is used as the parameter to the init function. The init function should return the initial application state and any tasks that need to be run at application start.

Anytime the url changes the urlParser function will be called again. This time the urlUpdate function will be called with two parameters, the return value of the urlParser function and the current application state. The urlUpdate function should then return a new application state and any tasks that need to be run as a result of the url changing.

```
const App = Frampton.Router.app;
const parser = Frampton.Router.parser;
const map = Frampton.Router.map;
const Never = Frampton.Data.Task;
const { div, section, text } = Frampton.DOM.Html;

const tagPostList = () => ({
    router: 'PostList'
  });

const tagPostDetail = (data) => ({
    router: 'PostDetail',
    id: data[0]
  });

const parsePostList = map(tagPostList, parser('/posts'));
const parsePostDetail = map(tagPostDetail, parser('/post/:number'));
const postRouteParser = oneOf([ parsePostList, parsePostDetail ]);

// urlParser will receive the window.location object
function urlParser(loc) {
  // The parser will return a Maybe. Fork will return the value of
  // the first callback for a Just or the value of the second callback
  // for a Nothing.
  return postRouteParser(loc.pathname).fork(
    (success) => success,
    () => ({ route: 'NotFound' })
  );
}

// The init function is called with the initial result of the urlParser. The
// return value of the init function is expected to be a tuple of the initial
// application state and any initial tasks to run.
function init(route) {
  const initialState = { route: route, username: 'Larry' };
  const initialTask = Never();
  return [ initialState, initialTask ];
}

// Update state based on messages
function update(msg, state) {
  switch(msg) {
    case 'click happened':
      const newState = { name : 'Bob' };
      return [ newState, Never() ];

    default:
      return [ state, Never() ];
  }
}

// After parsing the urlUpdate function is called with the value returned from
// parsing and the current state.
function urlUpdate(route, state) {
  const newState = {
    route: route,
    username: state.username
  };
  return [ newState, Never() ];
}

// Render view based on state
// Return values of event handlers are fed to update function as messages
function view(state) {

  switch (state.route) {

    case 'PostDetail':
      const clickHandler = (evt) => {
        return 'click happened';
      };

      return div({}, [
        h2('Post Detail Page'),
        section({ onClick : clickHandler }, [ text('click me') ])
      ]);
      break;

    case 'PostList':
      return div({}, [
        h2('Post List Page')
      ]);
      break;

    default:
      return div({}, [
        h2('404 Not Found')
      ]);
      break;
  }
}

// Create app
const app = App({
  init: init,
  update: update,
  urlUpdate: urlUpdate,
  urlParser: urlParser,
  view: view,
  rootElement: document.getElementById('app-root')
});

// The return value is a Signal of the current app state
app.value((currentState) => {
  console.log('The current app state: ', currentState);
});

```
