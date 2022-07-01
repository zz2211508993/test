#### 为什么要将配置文件分离

因为写代码存在两种环境：开发时环境，发布时环境

##### 1.开发时环境：是用于调试和运行时的环境,比如本地服务器运行

##### 2.发布时的环境：用于打包最后的webpack的文件，比如js的压缩

 所以为了遵循逻辑分离，方便后续的处理，通常将它们分为三个文件

##### base.config.js  基本配置，用于存储公用的，也就是开发时和发布时都用得到的

##### dev.config.js  开发时的环境，配置开发时用到的，比如本地服务器

##### prod.config.js 发布时的环境，配置发布时用到的，比如压缩(丑化)文件

##### 1.安装

```
npm install webpack-merge --save-dev
```

##### 2.配置文件分离

base.js的配置

```
const path=require('path') //require('path') 是node自带的，需要通过npm init创建一个package.json
const webpack=require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  //entry 路口
  entry:'./src/main.js',
  //output 出口
  output:{
    path:path.resolve(__dirname,'../dist'), //__dirname 保存的是node上下文的全局对象,dirname 获取当前文件所在路径
    filename:'bundle.js',
    //指定图片路径，以后图片路径都会来这里找
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader 解析css文件
        //style-loader 将导出的作为样式添加到DOM中
        //loader 是从右往左执行的
        use: ['style-loader', 'css-loader']
      },
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
              name: '/img/[name].[hash:8].[ext]'
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
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  //resolve解析
  resolve:{
    //处理后缀名,写上这个之后这些指定的后缀名就可以不用写了，比如.js .css .vue
    extensions:['.js','.css','.vue'],
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归aaa所有'),
    new htmlWebpackPlugin({
      template:'index.html'
    }),
    //开发时，不需要进行丑化
    //发布时，才需要进行丑化
  ],
}
```

dev文件的配置

```

const merge=require('webpack-merge');
const baseConfig=require('./base.config')
module.exports=merge(baseConfig,{
  plugins:[
    // new webpack.BannerPlugin('最终版权归aaa所有'),
  ],
  devServer:{
    //contentBase为那个文件夹提供本地服务
    contentBase:'./dist',
    //inline 页面是否实时刷新
    inline:true
  }
})
```

prod文件的配置

```
const uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
const merge=require('webpack-merge');
const baseConfig=require('./base.config')
module.exports=merge(baseConfig,{
  plugins:[
    //开发时，不需要进行丑化
    //发布时，才需要进行丑化
    new uglifyjsWebpackPlugin(),
  ],
})
```

用到的merge是合并，将baseConfig的配置文件和当前文件中的对象合并

最终导出

##### 3.配置最终的，并且使用

配置

build中使用的是发布时的环境

dev中使用的是开发时的环境

```
 "build": "webpack --config ./build/prod.config.js", 
 "dev": "webpack-dev-server --open --config ./build/dev.config.js"
```

使用

```
使用npm run 环境(build,dev)
```

