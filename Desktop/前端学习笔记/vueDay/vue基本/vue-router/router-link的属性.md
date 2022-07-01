router-link 是一个Vue内部定义的组件

##### 1.to 路由的跳转

##### 2.tag 设置渲染的标签，默认是a标签

```
<router-link to="Home" tag="button">首页</router-link>
会渲染成button标签
```

##### 3.replace 使用replaceState设置哈希值

```
 <router-link to="Home" tag="button" replace>首页</router-link>
 设置了replaceState就不能使用前进后退
```

##### 4.active-class 设置 router-link的class 

会将默认的router-link-exact-active 中的router-link-active 替换 active	

可以通过这个自定义的类名，控制选中的组件，设置样式

```
默认的
<a class="router-link-exact-active router-link-active"></a>
替换后的
<a class="router-link-exact-active active"></a>
```

还可以一次性替换所有的

```
const router=new VueRouter({
  routes,
  mode:'history',
  设置linkActiveClass:'active'
  linkActiveClass:'active'
})
会将所有的router-link的router-link-active 替换为 active
```

##### 5.除了使用to属性，还可以通过代码跳转

需要跳转后执行对应的javascript代码，可以使用这个

##### 也可以在组件中通过一个$router.push/$router.replace设置哈希值

$router.push("需要添加的哈希值")

$router.replace('需要添加的哈希值'),不能使用前进后退的按钮

```
export default {
  name:'App',
  methods:{
    btnClick1(){
      this.$router.push('/home');
    },
    btnClick2(){
      this.$router.push('/about')
    }
  }
}
```

