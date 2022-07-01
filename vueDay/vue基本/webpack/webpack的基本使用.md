##### 1.webpack安装(需要以管理员身份安装)

npm install webpack@3.6.0 -g 

-g全局安装

npm install webpack@3.6.0 --save-dev 本地安装

```
webpack ./src/main.js  ./dist/bundle.js
执行将 src中的main.js dist/bundle.js 添加到dist/bundle.js文件 每次都会创建bundle.js文件
```

2.webpack配置文件

1.需要创建一个webpack.config.js

配置一些文件

```
const path=require('path') //require('path') 是node自带的，需要通过npm init创建一个package.json
module.exports={
  //entry 路口
  entry:'./src/main.js',
  //output 出口
  output:{
    path:path.resolve(__dirname,'dist'), 
    //__dirname 保存的是node上下文的全局对象,dirname 获取当前文件所在路径,拼接后面'dist'
    filename:'bundle.js'
  }

}
```

2.需要通过

命令 npm init 安装 初始化的一些文件

然后配置package.json文件

默认通过在当前路径中输出webpack，找到的是全局的webpack

可以在package.json中新增一个"build": "webpack"  默认就会执行，本地的webpack

```
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"  //新增一个这个
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.6.0"
    不加这个安装css-loader,style-loader 会安装最新的，会报错。
    "css-loader": "^3.0.0", 
    "style-loader": "^2.0.0",
  }
}

```

3.使用模块化

```
//common js的写法
const {add,mul} = require('../src/js/mathUtils');
//ES6的写法
import {name,age} from './js/info';
console.log(add(10,20))
console.log(mul(10,20))
```

