#### 搭建本地服务器

###### 可以实现浏览器自动刷新，我们只需要更新呢，

###### 不需要在每次更新内容都输入 只要更新内容按下保存，就会执行 

###### **npm run build** 

###### **保存就会自动执行，**

###### **最后一次在使用npm run build打包** 然后就可以使用直接在dist中的index，使用



##### 1.安装本地服务器

```
npm install --save-dev webpack-dev-server@2.9.1
```

##### 2.配置本地服务器

```
 在module.exports={
 devServer:{
      //contentBase为那个文件夹提供本地服务
      contentBase:'./dist',
      //inline 页面是否实时刷新
      inline:true
    }
 }
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    //--open 保存时自动打开浏览器
    "dev": "webpack-dev-server --open"
  },
    
```

##### 3.使用本地服务器

通过webpack使用的是全局的

```
npm run dev 找的是本地的
```

