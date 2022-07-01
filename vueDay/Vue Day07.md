### 一. Vue CLI

#### 1.1. runtime-compiler和runtime-only的区别

* ESLint到底是什么? 代码规范检测


* template -> ast -> render -> vdom -> 真实DOM
* render: (h) => h, -> createElement



#### 1.2. Vue CLI3

* 如何通过CLI3创建项目

* ```
  vue create my-project
  ```

* CLI3的目录结构

* 配置文件: 1.Vue UI 2.隐藏的配置文件 3.自定义vue.config.js

* 

  



### 二. Vue-Router

#### 2.1. 什么是前端路由

前端路由就是使用前端技术是实现的路由

通过修改url，根据js的路由的规则，渲染指定的组件

并且前端路由，实现切换，页面不会刷新

* 后端渲染\后端路由
* 后端渲染，就是通过后端来写代码
* 后端路由，通过请求服务器的url，请求后端传送过来的html+css+js,渲染页面
* 前后端分离:就是前端通过ajax，请求后端的服务器，然后前端自己渲染
* SPA\前端路由，SPA前后端分离，就是多了一个前端路由

#### 2.2. 路由的基本配置

* 安装vue-router

* ```
  npm install @vue-router 
  ```

  

* Vue.use -> 创建VueRouter对象 -> 挂在到Vue实例上

* 配置映射关系: 1.创建组件 2.配置映射关系 3.使用router-link/router-view

#### 2.3. 细节处理

* 默认路由: redirect

* ```
  {
  	path:'',
  	redirect:'/home'
  }
  ```

* mode: history

* ```
  const router=new VueRouter({
  	mode:'history'
  })
  ```

* router-link -> tag/replace/active-class

* tag属性:就是指定渲染后的标签是什么

* replace 这种方式添加path，不会出现前进后退按钮

* active-class 将router-link-active 的class改成指定的 active

  ```
  <router-link></router-link>
  ```

  

#### 2.4. 动态路由

* /user/:id
* 
* this.$route.params.id



#### 2.5. 参数的传递

* params
* query -> URL
* URL: 
  * 协议://主机:端口/路径?查询
  * scheme://host:port/path?query#fragment

#### 2.6. 路由嵌套

* children: []

* ```
  children:[
  	{
           path:'news',
           component:News
  	}
  ]
  ```

  

#### 2.7. 导航守卫

* 全局导航守卫

* router.beforeEach 改变路由之前，执行的

* router.afterEach   改变路由之后，执行的

* 路由独享守卫

* ```
  routes:{
  	path:'/home',
	component:Home,
  	
  	beforeEach(){}{
  	
  	}
  }
  ```
  
  
  
* 组件类守卫

* ```
  * export default={
  	name:'Home'
  	//导航离开该组件对应的路由时调用
      *  beforeRouteLeave(to, from, next) {
          
        }
  * }
  ```

  

* 



#### 2.8. Keep-alive

需要写在router-view中，并且如果没有keep-alive。

那么就无法使用activated(选中的时候，执行的)/deactivated(没有选中的时候，执行的)

可以保存活跃的状态，也就是选中的状态

默认情况下会将包含在router-view中的所有组件，缓存

keep-alive的属性

- include 字符串/正则表达式,只有匹配到才会缓存
- exclude 字符串/正则表达式,匹配到就不会缓存



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

什么是前后端分离?

什么是前端路由, 什么是后端路由?



href -> hyper reference



