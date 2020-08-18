// 安装 snabbdom  
// $ yarn add snabbdom@0.7.4 / $ npm i snabbdom@0.7.4

// 导入 snabbdom

// 官网demo导入方式 commonjs模块化
// var snabbdom = require('snabbdom');

// es6导入方式（错误）
// import snabbdom from 'snabbdom'
// console.log(snabbdom);  // undefind

// es6导入
// import { h, thunk, init } from 'snabbdom'
// console.log(h, thunk, init);



// 1. hello world

import { h, init } from 'snabbdom'
// 参数：数组，模块
// 返回值：patch函数，作用-对比两个VNode（虚拟dom）的差异更新到真实dom

// init()函数，初始化patch函数
let patch = init([]);

// h() 函数，用来创建VNode
// 第一个参数：标签+选择器(#->id选择器 .-> 类选择器)
// 第二个参数：如果是字符串，就是标签中的内容
let vnode = h('div#container.cls', {
  hook: {
    init (vnode) {
      console.log(vnode.elm);
    },
    create (emptyVnode, vnode) {
      console.log(vnode.elm);
    }
  }
}, 'Hello World');

// 获取页面的真实dom
let app = document.querySelector('#app');

// patch() 函数，用来更新dom
// 将两个VNode进行对比，把对比的差异渲染到页面中（更新到真实dom中）并返回一个VNode
// 第一个参数：可以是dom元素，内部会把dom元素转换成VNode（会把真实dom转换为虚拟dom）
// 第二个参数：VNode
// 返回值：VNode
let oldVnode = patch(app, vnode);  // Hello World

// 假设的时刻
vnode = h('div', 'Hello Snabbdom');

// patch()函数对比后更新
patch(oldVnode, vnode);  // Hello Snabbdom

