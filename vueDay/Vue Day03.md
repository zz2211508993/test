一. 计算属性

#### 1.1. 计算属性的本质

* fullname: {set(), get()}

#### 1.2. 计算属性和methods对比

* 计算属性在多次使用时, 只会调用一次.
* 它是由缓存的



### 二. 事件监听

#### 2.1. 事件监听基本使用

v-on:click=‘xxx(事件名称)’

#### 2.2. 参数问题

* btnClick
* btnClick(event)
* btnClick(abc, event) -> $event



#### 2.3. 修饰符

* stop 阻止冒泡
* prevent 阻止默认事件
* .enter 回车键
* .once 只会执行一次
* .native



### 三. 条件判断

#### 3.1. v-if/v-else-if/v-else



#### 3.2. 登录小案例



#### 3.3. v-show

* v-show和v-if区别
* v-show 只是设置了display
* v-if 就是将元素删除或者新建



### 四. 循环遍历

#### 4.1. 遍历数组

v-for='item in arr'

#### 4.2. 遍历对象

* value 值
* value, key 带 属性名 属性值
* value, key, index 属性名 属性值 索引

#### 4.3. 数组哪些方法是响应式的

push 添加到数组的最后

pop 删除数组的最后一个

unshift  添加到数组的最前面

shift 删除数组的第一个

splice  插，删，改

sort 排序

reverse 颠倒



#### 4.4. 作业完成



### 五. 书籍案例



### 六. v-model的使用

#### 6.1. v-model的基本使用

* v-model => v-bind:value v-on:input

#### 6.2. v-model和radio/checkbox/select



#### 6.3. 修饰符

* lazy 只有按下回车/失去焦点，才会执行
* number 将默认的字符串类型，转换为数字类型
* trim 去除两端多余的空格



### 七. 组件化开发

#### 7.1. 认识组件化

就是将一个大的页面，拆分成一块一块的组件

然后拆分成的组件，也可以在拆分成小的组件

#### 7.2. 组件的基本使用

##### 1.创建组件构造器

```
const cpn=Vue.extends({
	template:
	`
		标签
	`
})
```



##### 2.注册组件

Vue.componet('标签名',组件构造器的名字)

##### 3.使用组件

```vue
<div id='app'>
	<cpn></cpn>
</div>
```

#### 7.3. 全局组件和局部组件

全局组件

Vue.compent('标签名',组件构造器的名字)

局部组件

在实例里

```
componet:{

​		'cpn'标签名:'{

​			template:cpn

​		}

}	
```



#### 7.4. 父组件和子组件

就是一个组件，在另一个组件中注册

另一个组件就是父组件，子组件就是那个在另一个组件中注册的

#### 7.5. 注册的语法糖

Vue.componet('标签名',{

​	template:'#id'

})

#### 7.6. 模板的分类写法

* script

* <script type='text/x-template' id='my-cpn'></script>

* template

  ```
  <template>
  </template>
  ```

  

#### 7.7. 数据的存放

* 子组件不能直接访问父组件
* 子组件中有自己的data, 而且必须是一个函数.
* 为什么必须是一个函数.
* 因为如果是一个函数，那么每次返回的都是一个不同的对象
* 如果是对象，都是同一个对象，就会出现数据混乱

#### 7.8. 父子组件的通信

* 父传子: props 
* 子传父: $emit

#### 7.9. 项目

* npm install 
* npm run serve







