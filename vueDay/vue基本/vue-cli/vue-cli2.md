##### 1.安装了vue-cli3 还想不安装vue-cli，使用vue2-cli2

需要拉低模板

```vue
npm install -g @vue/cli-init 这个不行需要升级
npm uninstall -g @vue/cli-init 卸载换成升级版的
npm i -g @vue/cli 这个是升级版的
vue init webpack my-project
```

还可能出现一种安装vue-cli的问题

通过管理员安装

或者以下的问题

```
命令清空cache中的
npm clean cache --force
```

还可以找到目录

```
C:\Users\18367\AppData\Roaming中的npm-cache
通过指定默认就是清空这里面的
```



##### 2.安装项目需要配置的

Project name 项目名字

Project  description 项目描述

Author 作者名称

Install vue-router 是否需要安装 路由

Use ESline to lint your code  检测代码规范

Set up uint tests 单元测试

Setup e2e tests with NightWatch 根据利用selenimu或webdriver或phantomjs等进行自动测试的框架

should we run ...

Yes us eNpn即可







![1640702432270](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1640702432270.png)

##### 3.node可以直接执行js，因为底层支撑有v8引擎，所以可以直接执行js

谷歌浏览器自带v8引擎可以直接将js转换为二进制执行

##### 4.如何手动关闭ESline 检测代码规范

找到config中的index.js

```
module.exports = {
	dev:{
		useEslint: false, true就是使用 false就是关闭
	}
}
```

