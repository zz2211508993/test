##### 1.通过location对象中的hash

```
location.hash修改哈希值，页面不会刷新变化
```

##### 2.通过HTML5的history中的，但是如果mode是hash   就会出现一些问题   mode:'history'就不会出现问题

pushState 栈内存存储的  先进后出 

先写的后面出去，后写的先出

```
history.pushState({},'','哈希值')
```

history.go(-1(后退) 1(前进)) 可以实现哈希值前进/后退

history.back 哈希值后退

history.forward 哈希值前进

```
history.back()
history.forward()
history.go(前进(1)或(-1)后退)
```

replaceState 直接替换，没有前进和后退

```
history.replaceState({},'','哈希值')
```

都不推荐使用