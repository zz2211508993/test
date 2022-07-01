1.runtime-complier

执行方式

template -> ast -> render -> virtual dom ->dom

2.runtime-only

render-> virtual dom ->dom

runtime-only的app.vue 在被使用的时候，就被渲染成一个对象

```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>
```

里面是没有template的，template在内部已经被渲染成一个render函数

.vue文件是通过vue-template-compiler 渲染成一个对象

对象中是不包含template，被渲染成一个render函数

```js
{name: 'App', components: {…}, staticRenderFns: Array(0), _compiled: true, render: ƒ, …}
beforeCreate: (2) [ƒ, ƒ]
beforeDestroy: [ƒ]
components: {HelloWorld: {…}}
name: "App"
render: ƒ ()
_withStripped: true
length: 0
name: "render"
prototype: {constructor: ƒ}
arguments: （…）
caller: （…）
[[FunctionLocation]]: App.vue?edc5:1
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[2]
staticRenderFns: []
_Ctor: {0: ƒ}
__file: "src/App.vue"
_compiled: true
[[Prototype]]: Object
}
```

不包含template