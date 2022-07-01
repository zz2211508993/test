1.定义一个state，在store直接使用state中的

```
const state={
  count: 1000,
  students: [
    {id: 110, name: 'chen', age: 20},
    {id: 111, name: 'li', age: 30},
    {id: 112, name: 'shi', age: 19},
    {id: 113, name: '小明', age: 10},
  ],
  obj: {
    name: 'chen',
    age: 21,
  }
}

```

2.将mutations,getters,actions, 分到对应的文件夹

![1641316518416](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1641316518416.png)



并且将代码剪切过去

类似这样子的导出，mutations,getters也一样

```
export default {
  asyncData(context,payLoad){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log(payLoad);
        context.commit('addData','123')
        resolve('123');
      },1000)
    })
  }
}

```

3.导入对应的，并且使用导入的

```
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import moduleA from './module/moduleA'
import moduleB from "./module/moduleB";
const store=new Vuex.Store({
  //保存状态
  state,
  mutations,
  getters,
  actions,
        // content.s
  modules:{
    a:moduleA,
    b:moduleB
  }
})
```