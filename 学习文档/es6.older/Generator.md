####  Generator 函数是 ES6 提供的一种异步编程解决方案 

1.Generator是状态机，封装了内部状态

格式:

```js
function * 函数名(){

}
```

##### yield表达式

- 表示暂停

- 写上了yield 只有调用next方法才会执行

- return也是要通过next方法才会执行


##### next 在yield中的执行顺序

- 1.遇到yield表达式会暂停，调用了next才会返回yield后面的值作为对象的属性值
- 2.继续执行next，直到遇到yield表达式

- 3.如果没有yield表达式，执行到return 语句，并将return后面的值，作为对象的属性值

- 4.如果没有return，对象的值就是undefined

- Genertaor的注意点:

- 如果写的函数是Generator，没有写上yield表示暂缓执行，要通过next执行

- yield只能用在Generator函数中