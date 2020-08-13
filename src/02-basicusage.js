// 2. div中放置子元素 h1, p
import { h, init } from 'snabbdom'

let patch = init([]);

// h()函数创建VNode包含子元素
// 第二个参数设置为数组
let vnode = h('div#container', [
  h('h1', 'Hello Snabbdom'),
  h('p', 'this is a p tag')
]);

let app = document.querySelector('#app');

let oldVnode = patch(app, vnode);

// 设置两秒后更新数据
setTimeout(() => {
  vnode = h('div#container', [
    h('h1', 'Hello World'),
    h('p', 'Hello p')
  ]);
  patch(oldVnode, vnode);

  // 清空页面元素（错误）
  // patch(oldVnode, null);  // error
  // 清空页面元素 第二个元素传入一个注释节点
  patch(oldVnode, h('!'));

}, 2000);



