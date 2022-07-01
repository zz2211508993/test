#### 生命周期

 和wbpack生命周期方法一样, 都是在从生到死的特定阶段调用的方法 

在vue实例中使用

格式

```
let vm = new Vue({
	这里写生命周期方法
   (beforeCreate...):function(){}
})
```

##### 1.创建阶段

beforeCreate:方法调用时  此时还没有data数据和methods方法         			

created:此时已经有data和methods，还没有模板

beforeMount:此时已经有模板了，只是还没有在界面上渲染

mounted:此时已经完成了最终的渲染

##### 2.运行阶段

beforeUpdate:数据更新完成，

界面还没同步 数据发生改变就会调用beforeUpdate

update:数据更新完成，界面也同步了  数据和界面都同步完成之后就会调用updated

##### 3.销毁阶段

beforeDestroy:组件即将销毁时，才会调用beforeDestroy    beforeDestroy 是最后能访问到数据和方法的函数

destroyed: 组件销毁后，才会调用destroyed  不要在这个生命周期方法再去操作组件中的数据和方法

​          