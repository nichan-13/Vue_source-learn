## realworld

> **Nuxt.js综合案例**
>
> Nuxt.js - 基于 Vue.js 的通用应用框架
>
> https://zh.nuxtjs.org/guide/

**realworld** - 一个可以使用任何技术栈实现的开源项目（论坛）

- 项目地址

  https://github.com/gothinkster/realworld

- 项目展示地址

  https://demo.realworld.io/#/

- 案例相关资源

  - 页面模板

    https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md

  - 接口文档

    https://github.com/gothinkster/realworld/tree/master/api

    ​	

### 创建项目

```
$ mkdir realworld
$ cd realworld/
$ npm init -y
$ npm i nuxt
```

```
// package.json 配置启动项
  "scripts": {
    "dev": "nuxt"
  }
```

- **项目启动**

  ```
  $ npm run dev
  ```

  

### 导入资源样式

- 新建 `app.html`

  - 创建Nuxt模板

    [https://zh.nuxtjs.org/guide/views#%E6%A8%A1%E6%9D%BF](https://zh.nuxtjs.org/guide/views#模板)

  - 在页面模板中复制样式链接

    - 页面模板文档

      https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md#header

    - 将链接通过cdn工具引入，提升页面加载速度

      cdn工具地址：http://www.jsdelivr.com/

    - 将公共样式放在 `/static/index.css` 中引入



### 初始化项目

#### 布局组件

- `pages/layout/index.vue` -- 导航栏和底部

- `nuxt.config.js` -- 自定义路由表规则

  - 扩展`Nuxt.js`创建的路由

    https://zh.nuxtjs.org/api/configuration-router#extendroutes

- `pages/home/index.vue` -- 首页
- `pages/login/index.vue` -- 登录注册
  - login
  - register
- `pages/profile/index.vue` -- 用户主页
- `pages/editor/index.vue` -- 文章发布页面
- `pages/article/index.vue` -- 文章详情页面

#### 处理顶部导航链接

- 将链接替换为路由

    ```
    <!-- <a class="nav-link active" href="">Home</a> -->
    <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
    ```

- 选中链接高亮

    ```
    // nuxt.config.js
    module.exports = {
      router: {
        linkActiveClass: 'active-link'
      }
    }
    ```

#### 封装请求模块

- 安装 `axios`

  ```
  $ npm i axios
  ```

- `utils/request.js` -- 基于 axios 封装的模块