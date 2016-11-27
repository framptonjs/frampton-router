import prepend from 'frampton-list/prepend';
import first from 'frampton-list/first';
import second from 'frampton-list/second';
import Union from 'frampton-data/union/create';
import execute from 'frampton-data/task/execute';
import createSignal from 'frampton-signal/create';
import { mergeMany } from 'frampton-signal/create';
import scene from 'frampton-dom/scene';
import getLocation from 'frampton-history/utils/get_location';
import locationSignal from 'frampton-history/signals/location';

const Messages = Union({
  UrlUpdate: [ 'location' ],
  UserAction: [ 'action' ]
});

/**
 * {
 *   update : Function,
 *   urlUpdate : Function,
 *   urlParser : Function,
 *   view : Function,
 *   init : Function,
 *   inputs : []
 * }
 */
export default function routing_app(config) {

  if (typeof scene !== 'function') {
    throw new Error('Frampton.App.withView requires Frampton.DOM');
  }

  function update(acc, msg) {
    const model = acc[0];
    return Messages.match({
      UserAction(action) {
        return config.update(action, model);
      },

      UrlUpdate(location) {
        return config.urlUpdate(config.urlParser(location), model);
      }
    }, msg);
  }

  const messages = createSignal();
  const initialState = config.init(config.urlParser(getLocation()));
  const inputs = (config.inputs || []);
  const userInputs = mergeMany(prepend(inputs, messages)).map(Messages.UserAction);
  const locationChange = locationSignal.map(Messages.UrlUpdate);
  const allInputs = userInputs.merge(locationChange);
  const stateAndTasks = allInputs.fold(update, initialState);
  const state = stateAndTasks.map(first);
  const tasks = stateAndTasks.map(second);

  const schedule = scene(config.rootElement, messages.push);
  const html = state.map((next) => {
    return config.view(next);
  });

  html.value(schedule);

  // Run tasks and publish any resulting actions back into messages
  execute(tasks, messages.push);

  return state;
}
