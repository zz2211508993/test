#### 如果不是父子组件相互传递，想相互获取数据

- 可以使用事件总线

##### 1.定义事件总线

```
Vue.prototype.$bus=new Vue({})
```

##### 2.使用事件总线

```
this.$bus.$emit('loadItemsImages')
```

- on是监听$bus.$emit传递过来的事件

```
    const refresh= debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('loadItemsImages',()=>{
      refresh()
    })
```

