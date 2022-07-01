Vuex是什么Vue提供的一个状态管理的插件

使用vue的步骤

##### 1.安装

```
npm install vuex --save
```

##### 2.导入Vuex

```
import Vuex from 'Vuex'
```

##### 3.创建Vuex对象

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
导出
export default store
```

##### 4.在main中的js中导入

```
import store from '../src/store/index'
```

##### 5.使用Vuex的state

```
$store.state.count
```



修改共享的数据,需要通过mutations