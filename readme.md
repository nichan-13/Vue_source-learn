## Vue_source-learn

Vue.js源码学习

----



#### 构建及启动

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

- 运行项目

  ```
  $ npm run dev
  ```

- 访问地址

  \- http://localhost:1234

- **注意：**

  查看不同的demo需要将 `index.html` 中修改引入相应的js文件

