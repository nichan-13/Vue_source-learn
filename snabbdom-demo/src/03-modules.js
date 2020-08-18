import {h, init } from 'snabbdom'

// 1. 导入模块(样式、事件)
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'

// 2. 注册模块
let patch = init([
  style,
  eventlisteners
]);

// 3. 使用 h() 函数的第二个参数传入模块需要的数据（对象）
let vnode = h('div', {
  style: {
    backgroundColor: 'pink'
  },
  on: {
    // 事件只能传入一个函数
    click: eventHandler
  }
}, [
  h('h1', 'Hello Snabbdom'),
  h('p', 'this is a p tag')
]);

function eventHandler() {
  console.log("被点击了");
}

let app = document.querySelector('#app');

patch(app, vnode);