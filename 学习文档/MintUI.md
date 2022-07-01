#### 1.MintUI

 MintUI是饿了么前端团队推出的一款基于Vue的移动端端UI框架 

MintUi的注意点:

1.在Mint中，按需导入还是需要加上css样式

2.在MintUl中不能通过Vue.use

使用格式:

##### 1.在终端输入安装

```
npm i mint-ui -S
```

##### 2.在main.js中导入Element文件

```js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
通过Vue.use使用对应的Element导入的文件
Vue.use(MintUI);
```

##### 3.在template标签中使用对应的ElementUI

```
 <mt-button type="default">default</mt-button>
```

##### 优化Mint文件的大小

按需导入，就是需要的就导入，不需要的就不导入

##### 1.在终端输入

```
npm install babel-plugin-component -D
```

##### 2. 修改 .babelrc文件

```
module.exports = {

}
```

##### 3.在main中按需导入

```js
import {Button,Switch 需要用到的组件的名称} from 'mint-ui'
import 'mint-ui/lib/style.css'
Button 就是按钮标签 Select 就是下拉框标签
通过Vue.component(Button(要用到的组件名称))使用要用到的组件
通过Vue.component(select(要用到的组件名称))使用要用到的组件
```

