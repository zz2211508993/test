解决方法:

第一种使用，重新加载当前文档

```
// location.reload()
```

第二种给router-view 添加一个key每次都会刷新

```vue
 <router-view :key="key"></router-view>
 
 
 computed:{
    key(){
      return this.$route.fullPath;
    }
  }
```

