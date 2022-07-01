接口测试的网站

##### https://www.httpbin.org/

功能特点:

- 在浏览器中发送XMLHTTPRequest请求
- 支持在node中发送http请求
- 支持 Promise的APi
- 拦截请求和响应
- 转换数据和响应数据



axios的请求方式

不设置默认是get请求params指定的参数

支持多种

- axios(config)


```
axios({
  url:'https://lianghj.top/'
}).then(res=>{
  console.log(res);
})
```

- axios.get(url,{data}/[{data}])


```
axios.get('https://lianghj.top:3000/personalized',{
  params:{
    limit:10
  }
}).then((res)=>{
  console.log(res);
})
```

接收多个请求可以使用axios.all

- axios.all 会等所有请求，请求完成之后再执行.then,


```
axios.all([
  axios.get('https://lianghj.top:3000/personalized'),
  axios.post('https://lianghj.top:3000/playlist/catlist')
]).then((res)=>{
  console.log(res);
})
```

还可以使用axios.spread展开数组，也就是相当于解构数组

```
.then(axios.spread((res,res2)=>{
  console.log(res,res2);
}))
```



常见的配置选项

- 请求地址
- url
- 请求类型
- method
- 根路径
- baseURL

```
baseURL:'https://lianghj.top:3000',
设置了之后，url不需要设置根路径了
```

- URL查询对象

- params：{}

- 超时设置

- timeout:1000 

- request body

- data:{}

  

get对应着params post对应着data{} 不能在post中获取怕params



全局配置

设置了axios中就不需要配置了

```
axios.defaults.baseURL='https://lianghj.top:3000'
```



