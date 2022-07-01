#### Vue-cil的安装

##### 1.需要安装node.js

![1634649867689](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634649867689.png)

选择这个Online 然后一直下一步就行了

##### 2.在命令提示符输入

```bash
npm install -g @vue/cli
```

![1634649940376](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634649940376.png)

##### 2.1在vscode的终端输入

创建一个项目

```
vue create my-project 
```

![1634650101410](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634650101410.png)

Default Vue2是 Vue-cli版本2

Default Vue3是 Vue-cli版本3 

如果是默认就不需要选择Babal什么之类的

Manually select features 手动安装

![1634650314185](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634650314185.png)

Choose Vue Version 选择Vue-cli的版本

Babel 将es6 转换为es5的工具

VueRouter 路由

Vuex 公共数据管理工具

CSS Pre-processors  CSS预处理

Linter /Formatter  提示或者格式化代码(美化代码)

![1634652007064](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634652007064.png)

是否需要安装router 是

![1634652035280](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634652035280.png)

选择第一个执行最快

![1634652083644](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634652083644.png)

选择第三个是标准的配置

![1634652173657](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634652173657.png)

第一个:检查之后保存

第二个:检查到不符合规范自动修复并且提交

![1634652270341](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634652270341.png)

你配置的这些Bable 需要放到文件夹吗

第一个:需要放到文件夹中

第二个:直接放到package.json文件中

![1634652381235](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634652381235.png)

需不需要将配置好的文件备份

![1640779727017](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1640779727017.png)

自定义配置的名字

每次创建项目，都会出现自定义配置的名字

![1640779678747](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1640779678747.png)



删除默认设置好的配置

```
C:\Users\18367\.vuerc
  "presets": {
  	//自定义配置的名字
    "test-vue/cli3": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {}
      },
      "vueVersion": "2"
    }
  }
  
```



##### 2.2启动项目

cd my-project2 进入my-project2文件中

npm run serve 打包到内存中

![1634652571251](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1634652571251.png)

这两个都可以执行文件

npm run build 打包到文件中



