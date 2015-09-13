import guid from 'frampton-utils/guid';

/**
 * @name renderer
 * @method
 * @memberof Frampton.Render
 * @param {String} template
 * @param {Frampton.Signals.Behavior} model
 * @returns {Object} DomNode
 */
export default function renderer(template, model) {
  var temp = document.createElement('div');
  temp.innerHTML = '<div></div>';
  var context = temp.firstChild;
  context.setAttribute('id', ('fr-view-' + guid()));
  console.log('context: ', context);
}