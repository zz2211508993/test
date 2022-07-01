 Promise 是异步编程的一种解决方案 

#### 1.Promise

格式:

```js
resolve成功 reject失败								  
执行成功then 执行失败catch
const recordViceOne=new Promise((resolve,  reject)=>{
                resolve('recordViceOne');
})
					 resolve('传递过来的参数')
recordViceOne().then((message)=>{
    				reject('传递过来的参数')	 
         }).catch((error)=>{
         })
// Promise.all 会等所有都执行完毕之后再返回
// Promise.race 只要第一个执行完毕之后就返回
recordViceOne().then((message)=>{
    				reject('传递过来的参数')	 
         }).catch((error)=>{
         })
recordViceTwo().then((message)=>{
    				reject('传递过来的参数')	 
         }).catch((error)=>{
         })
recordViceThree().then((message)=>{
    				reject('传递过来的参数')	 
         }).catch((error)=>{
         })
Promise.all([
                recordViceOne,
                recordViceTwo,
                recordViceThree,
                recordViceFour,
           ]).then((message)=>{
                console.log(message[3]);
  		   })
```

