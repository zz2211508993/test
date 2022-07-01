#### 1.Iterator(遍历器)是什么

- 就是一种机制，它是一个接口，给不同的数据结构,提供统一的接口

- 任何数据结构主要部署了Iterator接口，就可以遍历了(依次处理数据结构的所有成员)


##### 1.1.lterator的作用有三个:

- 1.为数据结构，提供统一的接口
- 2.使得数据结构的成员按照次序依次执行
- 3.ES6创建了一种新的遍历命令,for...on,Iterator接口主要供for...on使用

##### 1.2.Iterator中的next方法

- 每次都是指向数组的下个成员

- next返回一个对象，对象中保存成员信息

- value和done两个属性

- done为true表示执行完毕


- ```js
  var it = makeIterator(['a', 'b']);
  function makeIterator(array) {
            var nextIndex = 0;
          return {
              next: function() {
              return nextIndex < array.length ?
                  {value: array[nextIndex++], done: false} :
                  {value: undefined, done: true};
                  }
              };
          } 
  console.log(it.next()) { value: "a", done: false }
  console.log(it.next()) { value: "b", done: false }
  console.log(it.next()) { value: undefined, done: true }
  ```


##### 1.3.数据结构和接口是分开的，可以完全不写数据接口

```js
// var it = idMaker();
function idMaker() {
        var index = 0;

        return {
            next: function() {
            return {value: index++, done: false};
            }
        };
    }
```

##### 1.4.Iterator遍历过程

- 1.创建一个指针对象，指向当前的数据结构的起始位置
- 2.第一次调用next对象，就是指向第一个成员对象

- 3.第二次调用next对象，就是指向第二个成员对象

- 4.不断调用next对象，直到数据结构结束的位置

#### 2.默认的Iteator接口

 原生具备 Iterator 接口的数据结构如下。 

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象



