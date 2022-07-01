#### 1.vue的基本语法

##### 1.1创建一个vue对象

```vue
//1.创建一个Vue实例对象
let app=new Vue({
	   //2.告诉vue的实例对象，找到指定的元素
​      el:'.app',
	   //3.告诉vue的实例对象，找到指定的元素中的数据
​      data:{
​        type:"A",
​      }
		//专门用于存储事件
	   method:{

		}
	   //专门用于计算属性
	   computed:{
		//保存的是属性，使用不需要加()

	   }

​    })
```

#### 2.在html中使用vue

```html
<div id='app'>
	{{data对象中的数据}}
</div>

```

#### 3.指令

##### 3.1都是在标签中使用的

```
<div id='app'>
	<div v-text=''/v-html=''/v-if /v-else v-else if/v for>
</div>
```

##### v-text  

解析文字

##### v-html 

解析标签

v-text和v-html 都会覆盖原有的

##### v-if v-else v-else if

条件语句

##### v-for

多次渲染符合条件的元素

可以遍历数组，数字(中写的是几遍历到的就是几 10 就是从1遍历到10个)，字符，对象

##### v-once

只渲染一次

##### v-cloak 要配合CSS来使用

```
[v-cloak] {
  display: none;
}
<div id="app">
        <p v-cloak>
            {{message}}
        </p>
</div>
```

会等到数据渲染完毕,之后再将数据显示出来

##### v-model

设置数据双向传递

只支持<textarea> <input><select>标签

##### v-bind

专门给元素绑定属性

设置的属性可以是符合JS表达式的

格式:

1.v-bind:value='xx',

2.:value='xx',

也可以给元素绑定类名

可以设置多个类名

##### v-on

给元素添加事件

格式

```vue
v-on:click='myFn',
@click='myFn',
加括号可以传参
@click='myFn("xxx","xxx")',
```

修饰符

- - `.once` - 只触发一次回调函数。
  - `.prevent` - 调用 `event.preventDefault()` 阻止默认事件
  - `.stop` - 调用 `event.stopPropagation()`。 阻止冒泡
  - `.self` - 只有当前元素触发了事件，才会执行回调函数。
  - `.capture` - 添加事件侦听器时使用 capture 模式。 事件捕获
- 

按键修饰符

- `.enter` 回车

- `.tab`

- `.delete` 删除键

- `.esc `

- `.space`

- `.up`  

- `.down`

- `.left`

- `.right`

- ```vue
  自定义按键 Vue.config.keyCodes.f2 = 113
  ```

  

注意点:

需要配合Model中的methods

```vue
methods: {
	myFn:function(){
		访问data中的数据需要通过this.xx
	}
}
```

##### 3.2自定义指令

```
 Vue.directive('自定义指令名称',{

						 //绑定指令的元素
​	bind(钩子函数):function(el,obj){
		//obj 一个对象
		obj.name //绑定指令名
		obj.value //绑定值
		
	}

})
```

##### 钩子函数

- `bind`	指令第一次绑定到元素时触发 input的什么渲染的比较慢要使用inserted
- `inserted`：被绑定元素插入到父元素父节点，渲染完成之后执行

3.3自定义局部指令

```vue
directives:{
                'color':{
                    bind:function(el,obj){
                        el.style.color=obj.value;
                    }
                }
        }
```

##### 3.4计算属性

完整写法

```
  computed的完整写法是有
  set和get方法的
        fullName:{
        //设置的
        set(newValue){
          const names=newValue.split(' ');
          this.firstName=names[0]
          this.lastName=names[1]
          console.log('aaa')
        },
        //获取的
        get(){
          return this.firstName + ' ' + this.lastName
        }
      }
    set是fullName中的数据设置才会，调用  
  一般情况下是用不到set方法的所以可以简写
    fullName(){
        return this.firstName + ' ' + this.lastName
      }
```



##### 计算属性和methods之间的区别

计算属性里面缓存的数据，不发生变化就只会执行一次

methods只要调用一次就执行一次，调用n次执行n次

计算属性本质就是对象，不需要()调用

应用场景:哪些经常改变的属性，推荐使用方法

注意点:计算属性只要结果不发生改变，永远只会执行一次，

应用场景:是哪些基本上属性不会发生改变的，推荐使用计算属性



##### 3.5过滤器

全局过滤器格式:

```vue
过滤器接收两个参数

​      第一个参数:过滤器名称

​      第二个参数:处理数据的函数

​      默认情况下:处理数据的函数需要接收一个参数，就是被处理的数据

​      过滤器 可以连续使用
Vue.filter('msg', function (value) {
            
 })
```

局部过滤器格式:

```vue
filters:{
                "formatStr":function(value){
                    value=value.replace(/学院/g,"大学");
                    return value;
                }
            }
```

注意点:要将处理完的结果返回

#### 4.Vue中的MVVM设计模式

##### 4.1 MVVM设计模式由三种模式组成

M：Model 数据模型 （保存数据，处理数据）

V：View  视图 (展示数据，与用户交互)

VM：View Model 数据和视图的桥梁(M 中国人 V 美国人 VM翻译) 要向双向传递必须通过 VM

```vue
<body>
    View 视图
    <div id="app"></div>
    <script>
        View Model 数据和视图
        let vm = new Vue({
            el: '#app',
            Model 数据模型
            data: {},
            methods: {}
        });
    </script>
</body>

```

##### 4.2.数据单向传递

Model的数据->View Mobel ->View

##### 4.3数据双向传递

Model的数据 ->View渲染

View 渲染-> Mobel数据

##### 4.4Vue如何实现数据双向传递

```
<input type='text' v-model='msg'>
```

##### 4.4.1数据双向传递

注意点:只有以下这些标签可以用

<textarea><input><select>

两种组件渲染的方式

1.通过标签<one></one>,不会覆盖Vue实例的控制区域

2.通过render方法，会覆盖Vue实例的控制区域

```vue
let vm = new Vue({
            el: '#app',
            render:function(createElement){
                var html=createElement('one');
                return html;
            },
            components:{
                'one':{
                    'template':'#one',
                }  
            }
        });
```



##### 4.2使用vue.extends()创建子类

应用场景:配合$mount将xx挂载在Vue中

```vue
let LoadingConstructor=Vue.extend(Loading);
```









