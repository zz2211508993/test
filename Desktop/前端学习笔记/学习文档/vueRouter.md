#### VueRouter

##### 1.什么是VueRouter

VueRouter和v-if v-show 是用来切换组件的

VueRouter 不仅仅能切换组件，还能在切换的时候添加参数

##### VueRouter的使用

```vue
// 1.定义组件
const one={
            template: "#one",
          }
// 1.1定义切换的规则(定义路由的规则)
        const routes = [
        	每一个对象都是一个规则
            { path: '/one', component: one },
            { path: '/two', component: two }
        ]
// 1.2.根据自定义的规则创建路由对象
        const router = new VueRouter({
            routes:routes,
        })       
let vm = new Vue({
            el: '#app',
            // 1.3.将创建好的路由对象绑定到Vue实例上
            router:router,
            data: {},
            methods: {},
            components: {
                one: one, //相当于 template:'#one';
                two: two //相当于 template:'#two';
            }
        });
<div id="app">
		1.4.通过a标签修改哈希值
        <a href="#/one">第一个网页</a>
        <a href="#/two">第二个网页</a>
        1.5.通过router-view标签渲染匹配组件
        <router-view></router-view>
    </div>

          
```

VueRouter中的router-link

router-link 用来设置哈希值的标签

##### 1.通过router-link to设置哈希值

```vue
<router-link to='/one'>第一个网页</router-link>
```

##### 2.router-link的特点

默认情况下Vue 在渲染router-link的时候，是通过a标签来渲染的

 如果想设置成其他的标签，可以使用tag

```vue
<router-link to='/one' tag='button'>第一个网页</router-link>
```

##### 3.给router-link设置选中的样式

可以通过router-link-active 来设置样式 不推荐重写样式

```css
.router-link-active{
            background-color: pink; 
        }
```

还可以设置自定义选中的类名 linkActiveClass:'自定义样式名'

```vue
const router = new VueRouter({
            routes:routes,
            linkActiveClass:'nj-active(自定义类名)',
       })
.nj-active{
            background-color: pink; 
        }
```

##### 4.重定向路由

也就是哈希值

{ path: '/修改之前的哈希值(被重定向的值)', redirect: '/修改之后的哈希值(重定向之后的值)' },

```vue
const routes = [
            { path: '/', redirect: '/one' },
            { path: '/one', component: one },
            { path: '/two', component: two }
        ]
```

##### 2.VueRouter传递参数

只要Vue Router挂载在Vue实例对象中，就可以通过vue.$route拿到路由对象

可以拿到路由对象，就可以通过路由对象拿到传递的参数

方式一:通过URL参数(?key=value&key=value), 可以通过this.$route.query获取

```vue
<router-link to='/one?name=lnj&age=22' tag='button'>第一个网页</router-link>
const one={
            template: "#one",
            created: function () {
                console.log(this.$route.query);
            }
        }
```

  方式二: 通过占位符传递(路由规则中/:key/:key, 路径中/value/value), 通过this.$route.params获取 

```vue
<router-link to='/two/lnj/18' tag='button'>第二个网页</router-link>
const two={
            template: "#two",
            created: function () {
                console.log(this.$route.params);
            }
        }
const routes = [
            { path: '/one', component: one },
            { path: '/two/:name/:age', component: two }
        ]
```

##### 2.嵌套路由

嵌套路由就是子路由，就是在切换的组件中又能切换到其他的子组件

格式:

如果要在one中嵌套一个路由 就在one的对象中

写上children:[path:componet]

//如果是嵌套路由，不需要写一级地址和/

```vue
const routes = [
            {
                path: '/one', component: one,
                 children: [
                {
                path: 'onesub1',
                component: onesub1,
                },
                ]
        
            },
        ]
```

##### 3.命名视图

给router-link添加一个name就是命名视图，就会替换指定的路由

使用

```vue
<router-view name='names1'></router-view>
const routes = [
            {
                path: '/',
                components:{
                    names1:one,
                }
             },
    	 ]
```

4.watch属性

只要Vue中的Model的数据发生变化，watch就会调用回调函数

也可以在路由上使用

"$route.path"可以获取哈希值发生变化，也就是路由发生变化

```vue
num1:function(newValue,oldValue){
                            this.res=+ this.num1+ +this.num2;
                            console.log(newValue,oldValue;
                         },
"$route.path": function (newValue, oldValue) {
                        console.log(newValue, oldValue);
                        }                            
```



