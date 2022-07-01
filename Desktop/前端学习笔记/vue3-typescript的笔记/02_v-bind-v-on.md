#### v-bind

设置的属性可以是符合JS表达式的

##### 1.专门给元素绑定属性

```
v-bind:value='xx',
```

##### 2.v-bind的语法糖(简写)

```
: 代替 v-bind
```

也可以给元素绑定类名

##### 3.可以设置多个类名

```vue
:class='['类名','类名','类名' ]'
```

##### 4.也可以在添加三目运算符，是否绑定或者不绑定

```vue
:class='['类名',条件表达式 ? 成立之后的'类名'  不成立之后的类名:' ' ]'
```

##### 5.可以也可以使用对象来代替三目

```vue
:class='['类名',{类名,true/false}]'
```

##### 6.使用对象的方式添加类名

```vue
:class='obj'，会去Model中查找 true /false true添加类名 false不添加类名
let vm = new Vue({
            el: '#app',
            data: {
                flag:false,
                obj:{
                    'color':true,
                    'size':true,
                    'bgc':true,
                }
            },
            methods: {}
 });
```



注意点:

不加[]，会去Model中查找，

加了[],还要用括号括起来不然也是去Model中的数组中查找

##### 7.动态添加属性

通过对象方式添加

直接通过v-bind='添加动态属性'

```
<h2 v-bind="obj">123</h2>
```





#### v-on

##### 1.给元素添加事件

```vue
v-on:click='myFn',
@click='myFn',
加括号可以传参
@click='myFn("xxx","xxx")',
```

##### 2.使用对象的方式，一次性添加多个事件

```
 <button v-on='{click:addClick,mousemove:mouseMove}'></button>
```



修饰符

- - `.once` - 只触发一次回调函数。

  - `.prevent` - 调用 `event.preventDefault()` 阻止默认事件

  - `.stop` - 调用 `event.stopPropagation()`。 阻止冒泡

  - `.self` - 只有当前元素触发了事件，才会执行回调函数。

  - `.capture` - 添加事件侦听器时使用 capture 模式。 事件捕获

  - `.native` - 可以让组件使用，原生的事件

- 

按键修饰符

`.enter` 回车

`.tab`

`.delete` 删除键

`.esc `

`.space`

`.up` 键盘方向的上

`.down `键盘方向的下

`.left` 键盘方向的左

`.right` 键盘方向的右

```vue
自定义按键 Vue.config.keyCodes.f2 = 113
```



