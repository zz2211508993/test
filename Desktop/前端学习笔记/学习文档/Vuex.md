

#### Vuex 公共数据管理工具

Vuex是vue配套的公共数据管理工具，只需要将需要共享的数据放在vuex中即可

需要共享的放到Vuex，不需要的还是在vue的data中

不推荐在vue中直接修改共享数据，这样不便排错

##### 使用vuex

格式:

```vue
<script src="js/vue.js"></script>
<!-- 1.vuex要写在vue.js之后 -->
<script src="js/vuex.js"></script>
```

```vue
<!-- 2.创建一个vuex -->
const store = new Vuex.Store({
		保存共享的数据
        state: {
           name:'chen',
        },
})

```

##### 3.在祖先组件中创建一个store,key值保存Vuex对象 

这样后代都可以使用Vuex中保存的共享数据

```vue
store: store,
```

##### 4.使用vuex

```
<p>{{this.$store.state(Vuex对象中的state).name}}</p>
```

##### 修改共享数据

mutations 系统在执行 mutations中定义的方法，都会传递一个state给定义的方法

state 保存着共享的数据

```vue
mutations:{
            mAdd:function(state(state)){
                state.num=state.num +1;
                console.log(state.num);
            };
        }
```

getters 计算属性 Vuex中的

和vue的计算属性一样 数据没有发生变化，是不会重新渲染的，会去使用缓存中的

```vue
getters:{
            format:function(state){
                console.log('aaa');
                return '知播渔'+state.https;
            }
            
        }
```

