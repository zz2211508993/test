## express框架

- 可以对URL判断、Method判断 参数处理、逻辑代码处理 如果不用express 都需要自己封装

- express核心就是中间件，中间件就是回调函数

- express使用过程

  - 方式一 通过express提供的脚手架，直接创建一个

  - 方式二 从零搭建自己的express应用

    

- #### 方式一 安装express-generator

  - 安装脚手架
  - npm install -g express-generator
  - 创建项目
  - express express-demo
  - 安装依赖
  - npm install
  - 启动项目
  - node bin/www

- #### 方式二：零搭建自己的express应用

  - npm init -y 创建package.json

  

- #### 中间件

  - 中间件本质就是将回调函数传递给express

  - 这个回调函数接收三个参数

    - request 对象

    - response对象

    - next函数 如果想要执行下一次的中间件，需要使用

      

- 中间件可以执行那些任务

  - 执行任何代码

  - 更改请求(request和响应 response)

  - 结束请求-响应周期(返回数据)

  - 调用栈中的下一个中间件

    

- 如果当前中间件没有结束请求(res.end()),那么必须调用next让最后一个执行(res.end）否则就会一直挂起（也就是不会结束）

