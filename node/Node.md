### node 是可基于浏览器v8 Javascript引擎的JavaScript运行时环境



##### 什么是运行环境（可以在多个环境下运行node 浏览器）

- ###### 在浏览器运行，就会有浏览器的对象

- ###### 在node运行，就会有node对象

​	

##### 为什么JavaScript需要运行环境

- ###### 高级语言都需要将当前的解析为汇编语言转换成机器语言最终跑起来

##### 什么是JavaScript引擎，就是可以让Javascript跑起来的

- 比较常见的javascript引擎
  -  SpiderMoneky 第一款js引擎
  -  Chakra 微软开发，用于Ie
  -  **JavaScriptCore** WebKit中JavaScript的引擎 苹果开发
  - **V8** Google开发强大的引擎，目前使用最多



##### 浏览器内核（不同的浏览器不同的内核）

######  不同的浏览器不同的内核

- Gecko 最早期Netscape和火狐使用

- Trident 微软开发

- **Webkit** 基于KHTML开发 用于Safari Google Chrome之前

- **Blink** 是Webkit的一个分支，Google开发，目前用于谷歌浏览器

###### webkit 内核

-   WebCore 解析HTML 布局 渲染
-   JavaScriptCore 解析 执行JavaScript

