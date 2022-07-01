### 1.loder是对webpack的扩展

webpack默认情况下是无法加载css、图片、包含一些高级语法将ES6转换为ES5，将TypeScript转换为ES5

将scss less转换为css 将jsx文件 .vue文件转换为js

对于webpack是做不到的需要加上loader的扩展

##### 2.在webpack中使用css的

style-loader  将导出的样式添加到DOM中

css-loader     解析 css文件

```
npm install --save-dev style-loader
npm install --save-dev css-loader
```

##### 3.在webpack中使用less

```
npm install --save-dev less-loader les
```

配置css/less

##### 4.图片处理

需要安装

```
npm install --save-dev url-loader 处理图片
npm install --save-dev file-loader 将当前的图片放在指定的文件夹中
```

##### 5.将es6转换为es5

```
npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
```

##### 6.在webpack中使用.vue 

###### 查看 webpack配置vue.md文件

配置css/less 图片 es5/es6 vue

```js
const path=require('path') //require('path') 是node自带的，需要通过npm init创建一个package.json
module.exports={
  //entry 路口
  entry:'./src/main.js',
  //output 出口
  output:{
    path:path.resolve(__dirname,'dist'), //__dirname 保存的是node上下文的全局对象,dirname 获取当前文件所在路径
    将js放到哪里
    filename:'bundle.js'
    //图片搜索的路径
    //指定图片路径，以后图片路径都会来这里找
    publicPath:'dist/'
    
  },
  module: {
    rules: [
    //配置css
      {
        test: /\.css$/,
        //css-loader 解析css文件
        //style-loader 将导出的作为样式添加到DOM中
        //loader 是从右往左执行的
        use: [ 'style-loader', 'css-loader' ]
      },
      //配置less                                                                                        
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS //转换为css
        }, {
          loader: "less-loader" // compiles Less to CSS 加载和转译less
        }]
      },
      配置图片
       {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //如果图片小于8kb，那么就会在图片的后面加上base64去服务器请求，并且平铺
              //如果图片大于8kb，那么就会将图片添加到dist中的指定文件夹中
              limit: 13000,
              //并且图片大于8kb，需要设置指定的文件夹
              //webpack中的[]代表变量,[hash:8]表示只要8位哈希值，ext使用图片原来的格式
              name:'/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
       {
        test: /\.js$/,
        //exclude排除 排除node_modules 找src中的
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //预先安装好
            presets: ['es2015']
          }
        }，
      }
    ]
  }

}
```



##### 通过commonjs模块化规范使用

```
//css 不需要写变量
//导出的样式
require('./css/normal.css');
console.log(name,age)
//less
require('./css/specific.less');
```

