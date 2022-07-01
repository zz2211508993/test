### 一. 组件化开发

#### 1.1. 父子组件的访问

* children 获取的是所有的子组件
* refs 需要给标签设置ref 才可以获取得到子组件
* parent 获取的是当前的父组件
* root  获取的是根组件



#### 1.2. slot的使用

* 基本使用

* ```
  <div id="app">
  	如果这里没有设置，就会使用默认值
    <cpn><span>123</span></cpn>
  </div>
  <slot></slot>
  给slot设置默认默认值
  <slot><button></button></slot>
  
  ```

* 具名插槽

* ```
  <div id="app">
  	//在这里设置的不会，将带name属性的的替换
    <cpn><span>123</span></cpn>
    //除非指定,这里就会将具名的替换掉
    <cpn><span slot="left">123</cpn>
  </div>
  <slot name="left">左边</slot>
  ```

* 编译的作用域

* 1.在父组件中模板中，使用的数据都是父组件的数据

* ```vue
  <div id="app">
    <cpn v-show="isShow"></cpn>
  </div>
  这里使用的是父组件的数据
  ```

*  2.在子组件中模板中，使用的数据都是子组件的数据 

* ```vue
  <template id="cpn">
    <div>
      <p>p</p>
      <h2>h2</h2>
      <button v-show="isShow">11212</button>
      {{isShow}}
    </div>
  </template>
  这里使用的是子组件的数据
  ```

* 作用域插槽

* 父组件

* 可以通过slot-scpoe接收到子组件传递过来的数据

* slot-scpoe='slot(xxx)'

* ```vue
  <div id="app">
    <cpn></cpn>
    <cpn>
      <template slot-scope="slot">
  <!--        <span v-for="item in slot.data">{{item}}-</span>-->
  
        <span>{{slot.data.join('----')}}</span>
      </template>
    </cpn>
  </div>
  ```

* 子组件

* 可以通过自定义属性传递数据给父组件 :data='pLanguages(xxx)'

* ```vue
  <template id="cpn">
    <div>
      <slot :data="pLanguages">
        <ul>
          <li v-for="item in pLanguages">{{item}}</li>
        </ul>
      </slot>
    </div>
  </template>
  ```

  



### 二. 前端模块化

#### 2.1. 为什么要使用模块化

* 简单写js代码带来的问题

  1.会出现全局变量冲突

  2.js代码顺序是强制的

* 闭包引起代码不可复用.

* 自己实现了简单的模块化

* ```
  * var module=(function(){
  
    ​	let obj={
  
    ​	}
  
    ​	obj.name='111',
  
    ​	通过对象将要用到的属性暴露给外部
  
    ​	return obj
  
    ​	
  
  * })
  ```

  ```
  module.name
  ```

* AMD/CMD/CommonJS

#### 2.2. ES6中模块化的使用

* export 导出
* export {name,age}
* export default 可以让使用者自己传递名字呢，一个js文件只能出现一个
* import 导入
* import {name,age} from '../指定的路径'
* import aaa from '../指定的路径'



### 三. webpack

#### 3.1. 什么是webpack

用来

* webpack和gulp对比

* webpack可以实现模块化, gulp无法实现模块化

* webpack依赖环境

* node

* 安装webpack

* ```
  npm install webpack@3.6.0 -g 
  ```

#### 3.2. webpack的起步

* webpack命令

* 1.通过这个命令将src中的main.js 添加到dist中

* ```
  webpack ./src/main.js  ./dist/bundle.js
  ```

  ```
  npm install webpack@3.6.0 --save-dev
  npm init 安装一些初始化的
  基本使用
  在html的script中插入js文件
  <script src="./dist/bundle.js"></script>
  ```

* webpack配置: webpack.config.js/package.json(scripts)

#### 3.3. webpack的loader

* css-loader/style-loader
* less-loader/less
* url-loader/file-loader
* babel-loader



#### 3.4. webpack中配置Vue

* vue-loader
* 



#### 3.5. webpack的plugin

1.使用插件中的版权声明

```
const webpack=require('webpack'); //内置的webpack，里面有一些内置插件
plugins:[
        new webpack.BannerPlugin('最终版权归aaa所有')
    ]
```



#### 3.6. 搭建本地服务器

* webpack-dev-server

* ##### 1.安装本地服务器

* ```
  npm install --save-dev webpack-dev-server@2.9.1
  ```

  ##### 2.配置

  ```
  devServer:{
        //contentBase为那个文件夹提供本地服务
        contentBase:'./dist',
        //inline 页面是否实时刷新
        inline:true
      }
   }
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack",
      //--open 保存时自动打开浏览器
      "dev": "webpack-dev-server --open"
    },
  ```

  ##### 3.使用

  ```
  npm run dev
  ```

  



#### 3.7. 配置文件的分离





### 四. Vue CLI

#### 4.1. 什么是CLI

* 脚手架是什么东西.

* 就是会自己搭建项目依赖的包，什么的

* CLI依赖webpack,node,npm

* 安装CLI3 -> 拉去CLI2模块

* ```
  npm install -g @vue/cli-init
  vue init webpack my-project
  ```

#### 4.2. CLI2初始化项目的过程

```

```



#### 4.3. CLI2生产的目录结构的解析

![1640709805356](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1640709805356.png)

webpack的配置

![1640709830315](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1640709830315.png)

自己写的代码



export(导出)/import(导入)



.vue



dist -> distribution(发布)



>webpack ./src/main.js ./dist/bundle.js



开发时依赖

dev.config.js

运行时依赖

prod.config.js