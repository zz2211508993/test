##### 1.在webpack中安装vue

```
npm install vue --save
```

##### 2.然后要在main.js中导入

```vue
import Vue from 'vue';
const vm=new Vue({
  el:'#app',
  data(){
    return{
      message:'李银河',
    }
  }
})
```

##### 3.默认安装使用的是

```
<div id="app">
  <h2>{{message}}</h2>
</div>
也是template标签
```

 runtime-only   默认 不会解析template模板，

 runtime-compiler   会解析template模板

##### 4.设置默认为runtime-compiler

```
alias:{
        //'vue$'就是匹配以vue结尾的
        //esm包含compiler 会解析template
          'vue$':'vue/dist/vue.esm.js'
      }
```

##### 5.在webpack中使用.vue的文件

```
npm install vue-loader vue-template-compiler --save-dev
在webpack.config.js中
    rules:[
            {
            test: /\.vue$/,
            use: ['vue-loader']
            }   
    	],
extensions:['.js','.css','.vue'],	

```

##### 000---配置vue的文件

```
const path=require('path') //require('path') 是node自带的，需要通过npm init创建一个package.json
module.exports={
  //entry 路口
  entry:'./src/main.js',
  //output 出口
  output:{
    path:path.resolve(__dirname,'dist'), //__dirname 保存的是node上下文的全局对象,dirname 获取当前文件所在路径
    filename:'bundle.js',
    //指定图片路径，以后图片路径都会来这里找
    publicPath:'dist/'
  },
  module: {
    //rules定义的规则
    rules:[
            {
            test: /\.vue$/,
            use: ['vue-loader']
            }   
    	],
    
  },
      //resolve解析
  resolve:{
  	  //处理后缀名,写上这个之后这些指定的后缀名就可以不用写了，比如.js .css .vue
      //alias别名
      alias:{
        //'vue$'就是匹配以vue结尾的
        //esm包含compiler 会解析template
          'vue$':'vue/dist/vue.esm.js'
      }
      extensions:['.js','.css','.vue'],	
    }

}
```

