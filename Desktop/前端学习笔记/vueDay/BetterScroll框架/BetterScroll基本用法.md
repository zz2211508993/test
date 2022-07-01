BetterScroll 是用来替代iscroll的，也是参考iscroll中的源码

- BetterScroll修复了iscroll中的很多bug，并且还作者经常更新

BetterScroll的基本使用

betterScroll需要用一个最外层的wrapper的div包裹起来，还有一个名为content的类名的标签.

content不能出现兄弟标签，也就是content只能有子标签，不能有兄弟标签

```html
  <div class="wrapper">
    <ul class="content">
    </ul>
      这里不能写其他的标签
  </div>
```

第一个参数:要管理标签的类名或者id等等..

第二个参数:一个对象

```html
  <div class="wrapper">
    <ul class="content">
    </ul>
      这里不能写其他的标签
  </div>
new BScroll('.wrapper',{})
```

