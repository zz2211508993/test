#### v-for

##### 遍历数组

```
<ul>
      <li v-for="(item,index) in list">{{index}}:{{item}}</li>
           </template>
</ul>
```

第一个参数 item

第二个参数 index

##### 遍历对象

```
<ul>
      <li v-for="(value,key,index) in obj">{{key}}:{{value}}</li>
           </template>
</ul>
```

第一个参数 value

第二个参数 key

第三个 index

##### 传递数字

第一个参数 item

第二个参数 index

```
<ul>
      <li v-for="(item,index) in list">{{index}}:{{item}}</li>
           </template>
</ul>
```



##### v-for搭配template的使用

​	如果想循环遍历但是不想使用div或者其它元素渲染，渲染使用遍历的，可以使用template

​	到时候只有ul li没有template

```
<template id="my-app">
        <ul>
            <template v-for="(value,key,index) in list">
                <li>{{key}}:{{value}}</li>
            </template>
        </ul>
    </template>
```

