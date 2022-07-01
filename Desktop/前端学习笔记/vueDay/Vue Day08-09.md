### 一. Promise

#### 1.1. Promise的基本使用

* 如何将异步操作放入到promise中

* ```
  new Promise((resolve, reject)=>{
  	setTimeout(()=>{
        resolve('123')
      }，1000)
}).then((res)=>{
  	console.log(res);
})
  ```
  
  
  
* (resolve, reject) => then/catch



#### 1.2. Promise的链式调用





#### 1.3. Promise的all方法

可以同时接收多个请求，并且会等所有请求请求到之后再执行

第一种方式

每次都return 一个new Promise

```
  new Promise((resolve, reject)=>{
    //第一次网络请求的代码
    setTimeout(()=>{
      resolve('aaaa')
    },1000)
  }).then((data)=>{
    //第一次拿到结果处理的代码
    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);
    return new Promise((resolve, reject)=>{
      //第二次网络请求的代码
      setTimeout(()=>{
        resolve('bbbb')
      },1000)
    }).then((data)=>{
      //第二次拿到结果处理的代码
      console.log(data);
      console.log(data);
      console.log(data);
      console.log(data);
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          //第三次拿到结果处理的代码
          resolve('cccc')
        },1000)
      }).then((data)=>{
        //第三次拿到结果处理的代码
        console.log(data)
        console.log(data)
        console.log(data)
        console.log(data)
      })
    })
  })
```

第二种

```
  最复杂的格式
  new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('aaa');
      },1000)
  }) .then((res)=>{
    console.log(res+'第一层处理的10行代码\'')

    return new Promise((resolve, reject)=>{
      resolve(res+'111');
    })
  }).then(res=>{
    console.log(res+'第二层处理的10行代码');

    return new Promise((resolve, reject)=>{
      resolve(res+"222");
    })
  }).then(res=>{
    console.log(res+'第三层处理的10行代码');
  })
  前面那种格式的简写
    //简写通过Promise.resolve(res) 相当于 new Promise((resolve,reject)=>{resolve{res})
    //也可以通过Promise.reject(err) 简写报错的
/*    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('aaa');
      },1000)
  }).then((res)=> {
    console.log(res+'第一层处理的10行代码');
    return Promise.resolve(res+"111");
  }).then((res)=>{
      console.log(res+'第二层处理的10行代码');
      return Promise.resolve(res+'222');
    }).then(res=>{
      console.log(res+'第三层处理的10行代码')
    })*/
   //还可以用手动的抛出 throw，代替return Promise.reject();
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
          resolve('aaa');
    },1000)
    }).then((res)=>{
        return res;
    }).then((res)=>{
            console.log(res+'第二层处理的10行代码');
            throw 'error'
    }).then((res)=>{
        console.log(res+'第三层处理的10行代码');
    }).catch((err)=>{
        console.log(err);
    })
     //省略Promise.resolve
/*

 new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('aaa');
      },1000)
  }).then((res)=>{
    console.log(res+'第一层处理的10行代码');
    return res+'111'
  }).then((res)=>{
          console.log(res+'第二层处理的10行代码');
          return res+'222'
  }) .then((res)=>{

      console.log(res+'第三层处理的10行代码');
  })
  */
  
  
```



### 二. Vuex

#### 2.1. 什么是状态管理、

就是对多个共享的变量进行状态管理(state)



#### 2.2. Vuex的基本使用

* state -> 直接修改state(错误)

* 不能直接修改state中的

* mutations -> devtools

* - ```
      mutations: {
        //定义方法
        addCount(state) {
          state.count++;
        },
     }   
    ```

  - 如果直接在state中修改，那么devtools插件追踪不到



#### 2.3. 核心概念

- state -> 单一状态树

- getters -> 计算属性

- mutations -> 方法 可以接收参数

- ​      组件中通过commit('mutations中的方法',传递的数据)

  - ```
       addClick(){
          this.$store.commit('addClick','123')
        },
    ```

  -    在mutations中使用

  - ```
      mutations: {
        //定义方法
        addCount(state) {
          state.count++;
        },
     } 
    ```

    

- 

- actions -> 异步操作(Promise)

  - 在组件中使用dispath调用actions中的,并且传递数据123就是参数

  - ```
        aysnc1Data(){
          this.$store.dispatch('async1Data','123')
        }
    ```

  -  在actions中使用

  - ```
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

    



modules 模块化

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
```

在Vue.store中使用

- ```
  const store=new Vuex.Store({
    modules:{
      a:moduleA,
      b:moduleB
    }
  })
  ```





#### 2.4. 目录组织方式





### 三. 网络请求封装

#### 3.1. 网络请求方式的选择

```
如果想直接请求post

axios.post({

url:'xxx'

})

如果想直接请求get

axios.get({

url:'xx'

})

如果想发送多个请求和接收多个请求，可以使用axios.all
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(results => {
  console.log(results);
  console.log(results[0]);
  console.log(results[1]);
})
```



#### 3.2. axios的基本使用

```
axios({
	url: 'http://123.207.32.32:8000/home/multidata'
}).then({

})

axios.get({
	url:'xxx'
})
直接写get请求

```



#### 3.3. axios的相关配置

配置全局以后默认就会有一个根url,和一个超时时间

```
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
```



#### 3.4. axios的创建实例

```

const interceof =axios.create({

​	baseUrl:''

})

 interceof({

​	url: '/home/multidata'

}).then(res=>{

​	console.log(res)

})
```



#### 3.5. axios的封装

```
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000
  })

  // 请求拦截的，也就是数据发送出去之后
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 响应拦截，就是数据发送之后得到数据
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
```



#### 3.6. axios的拦截器

request 请求拦截，发送出去数据之后拦截

response 响应拦截，请求到数据之后拦截

```
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })
 
    instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })
```



### 四. 项目开发

#### 4.1. 划分目录结构



#### 4.2. 引用了两个css文件



#### 4.3. vue.config.js和.editorconfig



#### 4.4. 项目的模块划分: tabbar -> 路由映射关系



#### 4.5. 首页开发

* navbar 的封装
* 网络数据的请求
* 轮播图
* 推荐信息



```
git remote add origin https://github.com/coderwhy/testmall.git
git push -u origin master
```















sync -> 同步

async -> 异步



aysnc operation: 操作



xcode/iphonex/xml

token -> 



linus -> linux/git

