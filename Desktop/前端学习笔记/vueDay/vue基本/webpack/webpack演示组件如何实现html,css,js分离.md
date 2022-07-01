#### 1.从定义组件

```vue
const App={
  template:
  `   <div>
        <p>{{message}}</p>
        <h2>{{name}}</h2>
        <p>asasas</p>
      </div>
  `,
  data(){
    return{
      message:'李银河',
      name:'哈哈哈'
    }
  },
}
```

#### 2.写到js中的组件App.js中的

```vue
这样还是写在一起
export default{
  template:
      `<div>
          <p>{{message}}</p>
          <h2>{{name}}</h2>
          <p>asasas</p>
      </div>
  `,
  data(){
    return{
      message:'李银河',
      name:'哈哈哈'
    }
  },
}
```

3.最后写到vue文件中的组件

```vue
//html
<template>
  <div>
    <p>{{message}}</p>
    <h2>{{name}}</h2>
    <p>asasas</p>
  </div>
</template>
//js
<script>
export default {
  name: "App",
  data(){
    return{
      message:'李银河',
      name:'哈哈哈'
    }
  },
}
//css
</script>
<style scoped>
  div{
    color:pink;
  }
</style>
```

最后实现html js css分离

