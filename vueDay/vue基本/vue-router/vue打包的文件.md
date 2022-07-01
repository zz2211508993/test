##### 1.vue中打包

会将用文件打包到dist文件夹中

dist文件夹中会一个static文件夹中分为css文件夹 js文件夹 一个index.html 文件

![1641089515816](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1641089515816.png)

css文件夹，放着打包一个css相关的文件

![1641089530803](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1641089530803.png)

js文件j夹，分为三个js文件

一个app.js 用来放那些自己写的代码(业务代码)

一个manifest 用于存储对es6导出导入commonjs的底层支持相关的代码

一个vendors 用于存储第三方的文件比如(vue,vue-router,axios,boostarp等等)

![1641089547823](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1641089547823.png)

