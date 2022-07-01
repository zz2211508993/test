##### 1.修改Vuex中的state需要通过$store.commit('mutations中的方法')

- 通过组件的方法，使用commit

```
   addCount1(){
      this.$store.commit('addCount')
    },
    subCount1() {
      this.$store.commit('subCount')
    }
```

##### 2.通过mutation修改

```
const store = Vuex.Store({
	//共享的状态管理
	state:{
		count:0,
	}
	mutation:{
		//定义方法，保存着一个参数（state）也就是state中的·
		addCount(state){
			state.count++;
		}
		subCount(state){
			state.count++;
		}
	}
})
```

##### 3.使用

```
    <button @click="addCount1">+</button> 
    <button @click="subCount1">-</button>
    <h2>{{$store.state.count}}</h2>
```

##### 3.1mutaitinos的状态更新

mutaitinos的主要组成部分：

- 1.字符串的事件类型(type)
- 2.一个回调函数(handler)

##### 4.mutations获取传递过来的参数

- 还可以获取一个state的参数

- 和methods中传递过来的参数

- 通过commit来使用

  

获取传递过来的参数

```
addCount(state){
      state.count++;
},
increase(state,count){
      state.count+=count
},    
```

通过methods获取传递过来的参数

```
  increase(count){
      this.$store.commit('increase',count)
  },
  addStudent(){
      const stu={id:114,name:'xiaoHong',age:22};
      this.$store.commit('addStudent',stu)
  }
```

##### 4.1.mutations的提交风格

普通的提交风格

```
this.$store.commit('addStudent',stu)
```

另一种提交方式，对象的方式提交

```
this.$store.commit('addObject',{
        type:'addObject',
        count:100,
      })
```

##### 5.mutations的响应规则

这样添加的属性不是响应式的

```
// state.obj['sex']='男';
```

规则:

1. 提前给state中的属性初始化好，

2. 当给state中的对象添加新属性的时候，可以通过Vue.set()来添加属性

   使用格式:

   ```
   Vue.set(state.obj,'sex','男')
   删除属性可以通过
   Vue.delete(state.obj,'sex')
   使用js的detele,不是响应式
   delete state.obj['name'];
   
   ```

   

##### 5.1.mutations常量

如果嫌每次以后万一定义了多个函数或方法，嫌记函数名/方法名，可以使用一个常量来接收

格式：

定义常量

在mutationst-ypes.js

```
export const ADDDATA='addData'
```

在index.js

```
import * as types from '../store/mutations-types'
使用
 [types.ADDDATA](state){
      // state.obj['sex']='男';
      Vue.set(state.obj,'sex','男');
      delete state.obj['name'];
    }
```

在App.vue

```
import {ADDDATA} from "../src/store/mutations-types";
使用
 [ADDDATA](state) {
      this.$store.commit('addData')
    }
```

##### 5.2mutations同步函数

mutations传递的必须是同步的，不能是异步的

异步要通过actions

##### 6.actions,用于处理一些异步的操作

格式:

$store.dispatch 来使用这个actions

context 是上下文也就是store对象,payLoad，

actions中的:

```
    asyncData(context,payLoad){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log(payLoad);
          context.commit('addData','123')

          resolve('123');
        },1000)
      })
    }
```

App.js中使用

```
    this.$store
          .dispatch('aUpdateInfo', '我是携带的信息')
          .then(res => {
            console.log('里面完成了提交');
            console.log(res);
      })
```

##### 7.模块化

如果应用很复杂，那么一个store不好处理，

可以将store分割成模块，每个模块都有state，mutations，getters，actions

在store中使用模块化的注意点:

state 要通过 $store.state.a.message

模块化中获取到的context是当前的模块中的也就是moduleA/B

```
<!--    <h2>{{$store.state.a.message}}</h2>-->
<!--    <button @click="addClick">按钮</button>-->
<!--    <button @click="addClick">按钮</button>-->
<!--    <h2>{{$store.getters.addNum}}</h2>-->
    <button @click="aysnc1Data">异步</button>
```

在事件中使用

直接和之前一样就可以了

```
 addClick(){
      this.$store.commit('addClick','123')
    },
    aysnc1Data(){
      this.$store.dispatch('async1Data','123')
    }
```

格式:



```
const moduleA={
  state:{
    message:'13',
  },
  actions:{
    async1Data(context,payLoad){
      setTimeout(()=>{
        console.log(context,payLoad)
      },1000)
    }
  },
  mutations:{
    addClick(state,payLoad){
      console.log(state,payLoad);
    }
  },
  getters:{
    addNum1(){
      let age;
      return age=1000;
    },
    addNum(state,getter){
      return state.message +getter.addNum1;
    }

  },
}
const moduleB={
  state:{

  },
  actions:{
  },
  getters:{
  }
}
const store=new Vuex.Store({
 modules:{
    a:moduleA,
    b:moduleB
  }
})

```

