## Vue_source-learn

Vue.js源码学习

----



#### 一、Virtual DOM 的实现

> *Snabbdom* 是一个虚拟 DOM 库，专注提供简单、模块性的体验，以及强大的功能和性能。

##### `/snabbdom-demo` 构建

- 初始化项目
  
  ```
  $ mkdir snabbdom-demo
  $ cd snabbdom-demo
  $ yarn init -y / $ npm init -y
  ```

- 安装 [parcel](https://parceljs.org/)

  ```
  $ yarn add parcel-bundler / $ npm i parcel-bundler
  ```

- package.json中添加配置

  ```
  "scripts": {
    "dev": "parcel index.html --open",  // --open 浏览器自动打开
    "build": "parcel build index.html"
  },
  ```

- 安装 snabbdom（最新版本有更新，这里指定版本进行学习）

  ```
  $ yarn add snabbdom@0.7.4 / $ npm i snabbdom@0.7.4
  ```

------

#### 二、手写 Vue.js 响应式框架

- `/js` 目录下
  - **Vue2** 实现响应式 -- defineProperty (demo02-03)
  - **Vue3** 实现响应式 -- Proxy (demo04)

