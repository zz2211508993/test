### 客户端发送请求的方式

- 通过get请求中的URL的params  可以传一个或者多个/:

  - ```
    app.get("/login/:id", (req, res, next) => {
    //   console.log(req.params);
    //   res.end("Welcome");
    // });
    ```

    

- 通过get请求中的URL的query

  - ```
    app.get("/login", (req, res, next) => {
      console.log(req.query);
      res.end("Welcome");
    });
    ```

  - 

- 通过post请求中body的json
- 通过post请求中的body的x-www-form-urlencoded
- 通过post请求中的form-data格式