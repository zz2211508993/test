### headers属性

- content-type 携带数据的类型
  - application/json 表示是一个json类型
  - text/plain表示是文本类型
  - application/xml 表示是xml类型
  - multipart/form-data 表示是上传类型

- content-length 文件的大小和长度

- keep-alive

  - 用于建立长连接
    - 在http1.0或者1.0之前，如果想要保持链接
      - 浏览器需要在请求头加上 connection:keep-alive
      - 服务器需要在响应头加上 connection:keep-alive

  - 1.1之后默认都是带 connection:keep-alive 长连接

    - 但是node中只会保存长连接5秒

    - 不同的Web服务器保存不同的keep-alive的时间

      

  - accept-encoding 告知服务器用什么文件压缩格式 比如js文件用gzip，对应.gz文件
  - accept 告知服务器文件支持那些格式
  - user-agent 客户端相关信息