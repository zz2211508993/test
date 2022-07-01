### response中的属性

- 返回响应结果
  - Write方法，写出数据，但是不会关闭流
  - end方法，写出最后的数据，并且会关闭流

- 返回状态码

  - HTTP状态码是用来表示HTTP响应状态的

    

  - 设置状态码的方式

    - statusCode 直接赋值

      - ```
        res.statusCode = 400
        ```

        

    - writeHead

      - 第一个参数 状态码

      - 第二个参数 headers

        - ```
            res.writeHead(200, {
            "content-type": "application/json;charset=utf8",
             });
          ```

- 响应头文件

  - setHeader 一次写入一个头部信息

    - ```
        res.setHeader("Content-type", "text/html;charset=utf8");
      ```

  - writeHead 