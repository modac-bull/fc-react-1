// node
function createDOM(node) {
  if(typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  node.children
    .map(createDOM) // 재귀호출패턴
    .forEach(element.appendChild.bind(element)) // context가 깨진다?

  return element;
}

// 어떤 형태로 만들면 DOM 보다 간단한 구조가 될까?
const vdom = {
  tag:'p',
  props: {},
  children : [
    {
      tag: 'h1',
      props: {},
      children: [ "React 만들기" ],
    },
    {
      tag: 'ul',
      props:{},
      children: [
        {
          tag:'li',
          props: {},
          children: ['첫번째 아이템']
        },
        {
          tag: 'li',
          props: {},
          children: ['두번째 아이템']
        },
        {
          tag: 'li',
          props: {},
          children: ['세번째 아이템']
        }
      ]
    }
  ],
};

document.querySelector('#root').appendChild(createDOM(vdom));