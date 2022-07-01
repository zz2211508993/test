#### 1.Vant

VantUI是有赞前端团队推出的一款基于Vue的移动端端UI框架 式

使用格式:

##### 1.在终端输入安装

```vue
#Vue2的安装
npm i vant -S
# Vue3的安装
npm i vant@next -S
```

##### 2.在main.js中导入Element文件(按需引入)

按需导入，就是需要的就导入，不需要的就不导入

```js
import { NavBar,Card,SubmitBar } from 'vant'
通过Vue.use()使用对应的Element导入的文件
Vue.use(NarBar(需要使用的组件名称));
```

##### 3.在终端输入

```
npm i babel-plugin-import -D
```

##### 4. 修改 .babelrc文件

```js
module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset',{'modules': false}]
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
```

##### 5.在template标签中使用对应的ElementUI

```html
<van-nav-bar
    title="知播渔"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
   />
```



