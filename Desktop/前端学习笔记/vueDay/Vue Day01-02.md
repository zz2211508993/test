# Vue Day 01

### 一. 邂逅Vuejs

#### 1.1. 认识Vuejs

* 为什么学习Vuejs

* ##### 工作中需要用到

* ##### 并且vue是非常热门的，找工作10个里面9个要用到vue

* ##### 公司项目要用到vue重构

* ##### 所以为什么要学习vue

* Vue的读音

* Vue的渐进式

* 可以作为自己的应用嵌入到其中，带来丰富的体验

* Vue的特点

  1.组件复用

  2.路由技术 vue-Router

  3.虚拟DOM

  4.状态管理 vuex



#### 1.2. 安装Vue

* CDN引入
* 下载引入
* npm安装



#### 1.3. Vue的初体验

* Hello Vuejs
  * mustache -> 体验vue响应式
* Vue列表展示
  * v-for
  * 后面给数组追加元素的时候, 新的元素也可以在界面中渲染出来
* Vue计数器小案例
  * 事件监听: click -> methods

#### 1.4. Vue中的MVVM



#### 1.5. 创建Vue时, options可以放那些东西

* el: '绑定用于管理'
* data: 数据
* methods: 函数
* 生命周期函数



### 二.插值语法

* mustache语法
* {{}}
* v-once  只会调用一次
* v-html 会解析标签
* v-text 不会解析标签
* v-pre: {{}} 不会将解析{{}}中的,会原封不动的显示
* v-cloak: 斗篷 配合css，如果网页请求很慢，导致数据没有请求完成 会等到数据请求完毕之后在显示



### 三. v-bind

#### 3.1. v-bind绑定基本属性

* v-bind:sr
* :href


#### 3.2. v-bind动态绑定class

* 对象语法: {'active':false}
* 数组语法: ['active','message']

#### 3.3. v-bind动态绑定style

* 对象语法:

* ```
  v-bind:style={'属性名','属性值'}
  v-bind:style={'属性名',data中的数据}
  ```

* 数组语法:

* ```
  v-bind:style='[obj,obj1] obj/obj1是data中的数据
  ```

  



### 四. 计算属性

* 案例一: firstName+lastName
* 案例二: books -> price





