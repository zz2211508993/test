#### 1.ElementUI

ElementUI是饿了么前端团队推出的一款基于Vue的PC端UI框架 

对原生的标签进行了封装，美化了，让我们只用注意代码逻辑，而不是专注UI界面

使用格式:

##### 1.在终端输入安装

```
npm i element-ui -S
```

##### 2.在main.js中导入Element文件

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
通过Vue.use使用对应的Element导入的文件
Vue.use(ElementUI);
```

##### 3.在template标签中使用对应的ElementUI

```
<el-row>
      <el-button>默认按钮</el-button>
</el-row>
```

##### 优化Element文件的大小

按需导入，就是需要的就导入，不需要的就不导入

##### 1.在终端输入

```
npm install babel-plugin-component -D
```

##### 2. 修改 .babelrc文件

```

module.exports = {
  presets: [
        // 添加这种方式就可以按需了
      ['@vue/cli-plugin-babel/preset',{'modules': false}]    
        /* 
          这种也可以
     // '@vue/app',
        ['@babel/preset-env', // 添加 babel-preset-env 配置 就可以使用按需
        {
          'modules': false
        } 
        */
    ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui', // 按需引入的组件库
        'styleLibraryName': 'theme-chalk' // 按需引入的样式
      }
    ]
  ]
}

```

##### 3.在main中按需导入

```js
import { Button, Select,需要用到的组件名称 } from 'element-ui'; 
Button 就是按钮标签 Select 就是下拉框标签
通过Vue.use(Button(要用到的组件名称))使用要用到的组件
通过Vue.use(select(要用到的组件名称))使用要用到的组件
```

