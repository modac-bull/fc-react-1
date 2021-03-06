export class Component {
  constructor(props) {
    this.props = props;
  }
}

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

//helper함수
function makeProps(props, children) {
  return {
    ...props, // props는 그대로 전달
    children: children.length === 1 ? children[0] : children, // 하나일 때에는 단순 값으로 예외처리
  }
}

export function createElement(tag, props, ...children) {
  props = props || {} // default parameter 는 사용하지 못함 null값이 들어오므로

  // tag가 함수로 들어온다면..? tag의 이름이 대문자로 시작되면 이것을 자바스크립트 값으로 취급하고 반드시 함수이어야 한다. 그 함수는 jsx를 반환해야 할 것
  // 따라서 대문자로 시작해야 한다. 컴포넌트는 무조건 대문자로 시작해야 한다!! *(중요)*
  if (typeof tag === 'function') {
    if (tag.prototype instanceof Component) { // tag가 컴포넌트의 인스턴스인가?
      const instance = new tag(makeProps(props, children))
      return instance.render();

    } else {

    }
    if (children.length > 0) { // 자식 요소가 있다면
      return tag(makeProps(props, children))
    } else { // 자식 요소가 없으면
      return tag(props); // 어렵다
    }
  } else {
    return { tag, props, children, }
  }
}

// virtual DOM
export function render(vdom, container) {
  container.appendChild(createDOM(vdom));

} 

export const render = (function() {
  let prevDom = null;

  return function(vdom, container) {
    if (prevDom = null) {
      prevDom = vdom; // 최초의 DOM이 들어올 때
    } 
    
    // diff
    // Virtual DOM을 구현해보기...?

    container.appendChild(createDOM(vdom)); 
  }
})();