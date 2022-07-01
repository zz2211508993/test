#### Smybol是ES6推出的，返回的值是唯一的

####  bigInt 也是Es6推出的类型

- 赋值同一个值，也不会相等

```
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
console.log(sym2 === sym3);
console.log(sym1, sym2, sym3);
```

- Symbol的属性和方法

  - 属性
    - Symbol.length 长度
    - Symbol.prototype 构造函数的原型
    - Symbol.aysncIterator 
    - match 字符串匹配方法
    - replace 匹配替换字符串的方法
    - search  
    - split 字符串截取

  - 方法
    - symbol.for for循环
    
      