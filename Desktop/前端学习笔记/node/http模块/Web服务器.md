### Web服务器

- 就是应用程序需要某一个资源，需要向服务器，通过http请求获取这个资源，提供这个资源的服务器，就是一个Web服务器
- nodemon node的热更新
  - nodemon 执行的路径

- - 使用

  
- ##### 1.通过require拿到http
  
  - url 
  
    - parse 解析传入的字符串
  
- qs 
  
    - parse 
  
    ```
    const http = require("http");
    const qs = require("node:querystring");
    ```
  
  - ##### 2.通过createServer创建服务器
  
    - createServer 接收一个回调函数(request,response)
  
    - req中包含
  
      - method 请求方式
  
      - url 地址
  
      - headers 请求头
  
      - on 通过on('data') 可以拿到body中的数据
  
      - setEncoding 设置编码
  
        ```
          const { pathname, query } = url.parse(req.url);
          if (pathname === "/login") {
            // 解析query
            const { name, password } = qs.parse(query);
        
            console.log(name, password);
          }
        ```
  
    - res包含一些响应的 res 等等
  
      - end 相当于流的 end
  
        ```
      res.end("Hello")
        ```
    
  
- listen监听服务器启动
  - 第一个参数:端口
  - 第二个参数:主机号
  - 第三个:回调函数	

```
server.listen(8888, "0.0.0.0", () => {
  console.log("服务器正在运行");
});

```







