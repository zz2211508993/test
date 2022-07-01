

1.v-bind的用法

通过v-bind设置的class 不会替换掉 原class的，合并一起用

  1.v-bind 普通写法就是:class=变量 或者字符串

```vue
    <h2 :class="active">我是H2</h2>
```

  2.v-bind对象写法 对象和数组都可以使用data中的数据

```vue
    <h2 :class="{'active':false,'link':false,}">我是H2</h2>
    如果觉得写的太长了，可以使用methods/computed 计算属性不需要加()
    <h2 :class="getClass()">我是H2</h2>
```

  3.v-bind数组写法
```vue
    <h2 :class=['active','link']>我是H2</h2>
    <h2 :class=[active,(变量/字符串/对象)]>我是H2</h2>
```

  4.还可以使用三目运算符	

```vue
<h2 :class="['active',flag ? 'active' : 'link']">我是H2</h2>
```



