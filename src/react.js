export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props)
    .forEach(( [name, value]) => { element.setAttribute(name, value)})

  node.children
    .map(createDOM)
    .forEach(element.appendChild.bind(element));

  return element;
}

export function createElement(tag, props, ...children) {
  props = props || {} // default parameter 는 사용하지 못함 null값이 들어오므로
  return {
    tag,
    props,
    children,
  }
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));

} 