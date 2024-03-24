console.log('main.ts');

// Step 1
// 创建一个文本节点 挂载到根节点上
// v1
// const dom = document.createElement('div');
// dom.id = "app";
// document.getElementById('root').append(dom);

// const textNode = document.createTextNode('');
// textNode.nodeValue = 'app';
// dom.append(textNode);

// v2 react => vdom => js object
// 模拟生成dom的节点信息对象
// const textEl = {
//     type: 'TEXT_ELEMENT',
//     props: {
//         nodeValue: 'app',
//         children: []
//     },
// }

// const el = {
//     type: 'div',
//     props: {
//         id: 'app',
//         children: [textEl]
//     },
// }
// const dom = document.createElement(el.type);
// dom.id = el.props.id;
// document.getElementById('root').append(dom);

// const textNode = document.createTextNode('');
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

// type ReactNodeType = {
//     type: string;
//     props: {
//         [key: string]: any,
//         children: ReactNodeType[]
//     },
// }

// function createTextNode(text:string): ReactNodeType {
//     return {
//         type: 'TEXT_ELEMENT',
//         props: {
//             nodeValue: text, 
//             children: []
//         },
//     }
// }

// function createElement(type:string, props:any, ...children:any[]): ReactNodeType {
//     return {
//         type,
//         props: {
//             ...props,
//             children
//         },
//     }
// }

// 动态生成文本节点信息
// const textEl = createTextNode('app')
// 动态生成根节点信息
// const App = createElement('div',{id:'app'}, textEl);

// --- 可以根据父子级关系进行动态渲染并完成挂载 start --- 

// // 生成根节点
// const dom = document.createElement(App.type);
// dom.id = App.props.id;

// // 生成文本js节点
// const textNode = document.createTextNode('');
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

// // 根节点挂载
// document.getElementById('root').append(dom);

// --- 可以根据父子级关系进行动态渲染并完成挂载 end --- 



// function createElement(type:string, props:any, ...children:any[]): ReactNodeType {
//     return {
//         type,
//         props: {
//             ...props,
//             children: children.map(child => {
//                 return typeof child === 'string' ?  createTextNode(child) :child
//             })
//         },
//     }
// }

// function render(el:ReactNodeType, container: HTMLElement) {
//     const dom = el.type === 'TEXT_ELEMENT'? document.createTextNode('') : document.createElement(el.type);

//     Object.keys(el.props).forEach(key => {
//        if (key !== 'children') {
//         dom[key] = el.props[key]
//        }
//     })
//     console.log(el)

//     const children = el.props.children;
//     children.forEach(child => {
//         render(child, dom)
//     })

//     container.append(dom)
// }
// const App = createElement('div',{id:'app'}, 'hi','-','mini','-','react');
// render(App, document.getElementById('root'))

// 根据react项目基础 设计出ReactDOM基本结构
// const ReactDOM = {
//     createRoot(container) {
//         return {
//             render(App) {
//                 render(App, container)
//             }
//         }
//     }
// }

import ReactDOM from './core/ReactDOM.js';
import App from './App.js'

ReactDOM.createRoot(document.getElementById('root')).render(App)