##### 1.Promise是处理异步编程操作的一种解决方式

Promise的格式：

接收一个函数接收两个参数

并且then中也接收一个函数   catch也是

then/catch可以接收来自resolve('aa')/reject('bb')的参数

new Promise(函数(resolve(解决),reject(成功)))

```
new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('aaa');
		reject('bbb');
	})
}).then((data)=>{
	console.log(data)//aaa
}).catch(err)=>{
	console.log(err)/bbb
}

```

##### 2.Promise三种状态:

- pending:等待状态，也就是还没有请求到数据

- fulfill:满足状态,也就是调用了resolve就是该状态，并且会调用.then()

- reject:拒绝状态,也就是调用了reject就是该状态,并且会调用.catch(）

  还可以简写只写then，并且执行then和catch

  ```
  .then(()=>{相当于then},()=>{相当于catch})
  ```

##### 3.Promise的链式写法

使用new Promise

```
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
```

简写用Promise.resolve/reject替代  

```
/*    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('aaa');
      },1000)
  }).then((res)=> {
    console.log(res+'第一层处理的10行代码');
    return Promise.resolve(res+"111");
  }).then((res)=>{
      console.log(res+'第二层处理的10行代码');
      return Promise.reject(res+'222');
    }).then(res=>{
      console.log(res+'第三层处理的10行代码')
    }).catch(err=>{
      console.log(err)	
    })
```

Promise.resolve的简写

```
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
    }).then((res)=>{

      console.log(res+'第三层处理的10行代码');
  	})
  */
```

还可以用throw抛出，代替return Promise.reject

```
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

```

