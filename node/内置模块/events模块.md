#### events 模块 (可以操作事件)

- 发出事件监听事件都是通过EventEmitter类来完成的，它们都属于events对象

  - emitter.on 监听事件

  - emitter.off 移除事件

  - removeListener 移除所有事件

  - emitter.emit 发射事件，可以携带参数

    

- ##### 常见属性

  - EventEmitter的实例有一些属性，可以记录一些信息
  - emitter.eventNames 返回当前注册对象的字符串数组
  - emitter.listenerCount(事件名称) 返回当前EventEmitter对象某一个事件的个数
  - emitter.listener(事件名称) 返回一个数组，保存着事件的函数

