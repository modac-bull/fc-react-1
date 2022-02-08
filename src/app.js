/* @jsx createElement */
import { createDOM, createElement, render } from './react' 

// 복잡해보인다. 개선방안
// 객체 생성 함수 ... 세 개의 속성을 갖고 있는 객체를 생성하는 함수를 만든다면?
// const vdom = {
//   tag: 'p',
//   props: {},
//   children: [{
//       tag: 'h1',
//       props: {
//       },
//       children: ["React 만들기"],
//     },
//     {
//       tag: 'ul',
//       props: {},
//       children: [{
//           tag: 'li',
//           props: {
//             style : "color : blue"
//           },
//           children: ["첫 번째 아이템"]
//         },
//         {
//           tag: 'li',
//           props: {
//             style: "color : green"

//           },
//           children: ["두 번째 아이템"]
//         },
//         {
//           tag: 'li',
//           props: {
//              style: "color : red"

//           },
//           children: ["세 번째 아이템"]
//         },
//       ]
//     }
//   ],
// };

// root가 하나인 트리구조이어야 한다. 따라서 하이요소 children은 배열로 받, 가변인자를 배열로 받으면 어떨까? 먼 말이지
// 객체 리터럴과 createElement 비교
// 코드 량을 조금 줄였다에 의의를 가져보자
// const vdom = createElement('p',{}, 
// createElement('h1', {}, "React 만들기"),
// createElement('ul', {}, 
//   createElement('li', { style: "color: red"}, "첫 번째 아이템"),
//   createElement('li', {style: "color: blue"}, "첫 번째 아이템"),
//   createElement('li', {style: "color: green"}, "첫 번째 아이템"),
//   )
// );

// 개선방안 : @babel @jsx 바벨이 제공해줌 transfiler
// 1. 실제로 React 만들 때 DOM보다 훨씬 간단한 구조를 만들었다.
// 2. 객체 리터럴, 함수호출 보다 구조 파악하기 쉽다 (마크업 형태를 유지하므로)
/* React 스럽게 바뀌었음 
제약 사항
- 코드상으로는 creaetElement 사용하지 않지만 import 할 때 호출해야 하는 경우 있음
*/
const vdom = <p>
  <h1>React 만들기</h1>
  <ul>
    <li style="color:red">첫 번째 아이템</li>
    <li style="color:red">두 번째 아이템</li>
    <li style="color:red">세 번째 아이템</li>
  </ul>
</p>


render(vdom, document.querySelector('#root'))