### 一. Vue CLI

#### 1.1. runtime-compiler和runtime-only的区别

* ESLint到底是什么?


* template -> ast -> render -> vdom -> 真实DOM
* render: (h) => h, -> createElement



#### 1.2. Vue CLI3

* 如何通过CLI3创建项目
* CLI3的目录结构
* 配置文件: 1.Vue UI 2.隐藏的配置文件 3.自定义vue.config.js



### 二. Vue-Router

#### 2.1. 什么是前端路由

* 后端渲染\后端路由
* 前后端分离
* SPA\前端路由

#### 2.2. 路由的基本配置

* 安装vue-router
* Vue.use -> 创建VueRouter对象 -> 挂在到Vue实例上
* 配置映射关系: 1.创建组件 2.配置映射关系 3.使用router-link/router-view

#### 2.3. 细节处理

* 默认路由: redirect
* mode: history
* router-link -> tag/replace/active-class

#### 2.4. 动态路由

* /user/:id
* this.$route.params.id



#### 2.5. 参数的传递

* params
* query -> URL
* URL: 
  * 协议://主机:端口/路径?查询
  * scheme://host:port/path?query#fragment

#### 2.6. 路由嵌套

* children: []



#### 2.7. 导航守卫

* 全局导航守卫
* 路由独享守卫
* 组件类守卫



#### 2.8. Keep-alive



#### 2.9. TabBar的封装过程



C:\Users\Administrator\AppData\Roaming



vue init webpack project

runtime+compiler和runtime-only





template -> ast -> render -> virtual dom -> 真实DOM



vue2.5.21 -> vue2.x -> flow-type(facebook)



Vue3.x -> TypeScript(micro(微小)soft(软件)) 



future: 将来/未来

fut: 特性



rc -> run command



vcs -> version control system(版本控制git/svn)



什么是前端渲染, 什么是后端渲染?

- 就是通过前端的代码来渲染页面

- 就是通过后端的代码来渲染页面


什么是前后端分离?

- 后端服务器提供api

- 前端通过ajax获取到api中的数据，然后渲染到页面上


- 然后渲染到页面上去，不需要通过后端渲染，前后端分离


什么是前端路由, 什么是后端路由?

- 前端路由url发生改变，根据js中的路由规则，渲染指定的页面，不会刷新页面

- 后端路由请求到url，每次都会去请求url，并且刷新页面






后端路由



href -> hyper reference



