### 异步等待

##### 需要使用 在执行异步的函数前面增加 async

- 可以使得异步等待更加容易


- ```
  async function dowork
  ```


##### 需要使用函数 前加加上 await

```
const response= await makeRequest('Googl1e');
```

##### 如果在异步等待中要使用 执行成功 /执行失败

```js
try{

}
catch(执行失败传入进来的){

}
```

