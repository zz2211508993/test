记录当前路由活跃的状态

keep-alive将router-view标签包裹起来

注意点:

- 如果没有使用keep-alive包裹router-view

- activated活跃的 deactivated不活跃的

- 那么不可以使用activated 和deactivated




如果出现

 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/operate/examinationScore". 

就安装

```
 npm i vue-router@3.0 -S 
```

keep-alive的属性 

- include 字符串或者正则表达式，被匹配到才会被缓存

- exclude 字符串或者正则表达式，被匹配到的不会被缓存

- 匹配export default中的name User中的name,profile中的name

注意点:keep-alive会匹配里面所有包含的组件都会被缓存

```
<keep-alive exclude="User,Profile"><router-view></router-view></keep-alive>
```

