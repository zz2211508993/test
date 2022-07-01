#### 使用better-scroll出现的问题

##### 1.tab-control会跑到最前面去

因为设置了 transform: translate(0px, -281px)  会让fixed 不随着滚动
    

##### 2.图片会跑到那个tab-control哪里去

因为tab-control设置了postition:fixed 脱离标准流了

所以图片跑到了tab-control的位置去了

不使用

```
  .fixed{
    position: fixed;
    left:0;
    right:0;
    top:44px;
  }
```



解决方法

css

```
    .tab-control{
    position: relative;
    z-index: 99;
    }
```

在组件中复制一个

放在scroll的外部

```
    <tab-control
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabControlClick"
      ref="tabControl1"
      v-show="isShowTab"
    >
```

并且内部的tab-control 和外部的ref不要一样

让tab-control中的currentIndex 等于外部的tab 和内部的tab

```
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
```

 