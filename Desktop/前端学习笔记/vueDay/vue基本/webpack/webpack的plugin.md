#### plugin 插件

##### 1.使用插件中的版权声明

```
const webpack=require('webpack'); //内置的webpack，里面有一些内置插件
plugins:[
        new webpack.BannerPlugin('最终版权归aaa所有')
    ]
```

##### 2.使用将html打包到dist中的插件

1.安装

```
npm install html-webpack-plugin --save-dev
```

2.配置使用

```vue
const htmlWebpackPlugin=require('html-webpack-plugin');
new htmlWebpackPlugin({
          template:'index.html'
        }),
```

3.还需要将output中的publicPath删掉，

之前是在src中，才需要用到指定路径

现在在dist中，就不需要指定了

```
  output:{
    path:path.resolve(__dirname,'dist'), //__dirname 保存的是node上下文的全局对象,dirname 获取当前文件所在路径
    filename:'bundle.js',
    //指定查找路径，以后文件查找路径都会来这里找
    // publicPath:'dist/'
  },
```



##### 3.使用插件将js文件丑化

也就是将js代码中的空格注释换行英文改成简写,让体积更小

1.安装

```node
npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
```

2.配置使用

```vue
const uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
new uglifyjsWebpackPlugin(),
```

