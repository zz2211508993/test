### 			包管理工具 npm

- ##### 包管理工具npm

  - Node Package Manager 就是Node包管理工具
  - 但是现在不仅仅是只Node包管理器，在前端项目中可以使用来管理依赖的包
  - 比如 express react vue axios babel webpack 等等



- ##### npm管理的包放在哪里

  - 发布自己的包放在registry上面的
  -  安装的包是从registry上面下载的包

  



- ##### npm install 命令

  - 安装npm包分为两种情况:

    - 全局安装 npm install  xxx -g

    - 局部安装 npm install xxx

    

  - 全局安装

    - 只有工具才能正常使用 yarn webpack等等

    - axios express koa等库文件是无法正常使用的

      

- #####  项目安装

  - 安装开发和生存

    - npm install axios

    - npm i axios

      

  - 开发依赖

    - npm install webpakc --save-dev

    - npm install webpack -d

    - npm i webpack -D

      

  - 安装package.json中的依赖包

    - ​	npm install 
    
  - npm其他命令
  
    - 卸载依赖包
      - npm uninstall package 
      - npm uninstall package  --save-dev
      - nnpm uninstall packag -D
    - 强制时重新build 
      - npm rebuild 
    - 清除缓存
      - npm cache clean

- ##### npm instlal 原理

  ![1653900965305](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1653900965305.png)

​	



