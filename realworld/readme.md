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
$ npm i nuxt --save
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

  - 扩展Nuxt创建的路由

    https://zh.nuxtjs.org/api/configuration-router#extendroutes

- `pages/home/index.vue` -- 首页

- `pages/login/index.vue` -- 登录注册
  - login
  - register
  
- `pages/profile/index.vue` -- 用户主页

- `pages/editor/index.vue` -- 文章发布页面

- `pages/article/index.vue` -- 文章详情页面

  ​		

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
    
    ​	

#### 封装请求模块

- 安装 `axios`

  ```
  $ npm i axios --save
  ```

- `utils/request.js` -- 基于 axios 封装的模块

  ​	

### 登陆和请求模块

#### 封装请求方法

请求方法封装成模块，均放在 `api` 下

- `user.js` -- 登陆和注册

  ​	

#### 登录状态存储

- `store/index.js` -- vuex 保存登录状态

  ​	

#### 登录状态持久化

防止页面刷新数据丢失，利用**cookie**进行存储

- 安装 `js-cookie ` -- 把数据存储在**cookie**中

  ```
   $ npm i js-cookie --save
  ```

- 导入 `js-cookie` (只在客户端加载)

  ```
  // process.client -- Nuxt判断运行在客户端还是服务端
  const Cookie = process.client ? require('js-cookie') : undefined;
  ```

  ​		

- 安装 `cookieparser` -- 把**cookie**字符串转为**js**对象

  ```
  $ npm i cookieparser --save
  ```

- 导入 `cookieparser` (只在服务端加载)

  ```
  // process.server -- Nuxt判断是否运行在服务端
  const cookieparser = process.server ? require('cookieparser') : undefined;
  ```

  ​		

### 处理导航栏链接展示

1. 将导航栏链接分为**未登录显示**和**登录后显示**两部分

2. 通过 `Vuex` -- **mapState** 判断登录状态 

   ​	

### 页面访问权限

防止用户在未登录的情况下，在地址栏输入访问需要登录才可访问的页面，或在已登录的情况下再次访问登录页面。

利用中间件对页面设置访问权限

- `middleware` 中间件

  - `/authenticated` -- 验证未登录
  - `/noAuthenticated` -- 验证已登录

- 给每个模块按照使用场景分别加上中间件

  ```
  export default {
    middleware: "noAuthenticated",
    }
  ```

  

