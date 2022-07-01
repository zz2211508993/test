#### 如何使用nginx

- ##### 下载

  - ```
    http://nginx.org/
    ```

    

- ##### 安装选择什么版本

  1. #####  stable version 稳定版

  2. #####  mainline version 主线版也就是最新版本

  3. #####  bugfix version  老版本

     ###### 	推荐使用稳定版

     

- ##### 使用默认情况下会占据8000端口

  - 要找到

    

- ##### 默认情况下会去nginx的根目录下查找html中的index

  - 可以通过打包的dist文件夹中的html css img 等等直接替换
    - 然后就可以使用项目了

- ##### 还可以修改配置文件去根目录中的指定目录查找文件

  - nginx.conf文件 

    - ```
      location / {
      			//根目录下查找html文件,修改xxx就会查找根目录下的xxx文件
                  root   html;
                  //根目录下的xxx中的index.html文件
                  index  index.html index.htm;
              }
      ```

      

##### 命令提示符中的代码

重启

```
nginx -s reload
```

