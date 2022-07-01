### Map类似于对象，也是键值对的集合，各种类型的值（包括对象）都可以当做键



##### 实例属性和方法

- size属性 返回Map结构的成员数量
- set(key,value) 设置键值 如果已经存在值，那么会修改成最新的。没有的话就会新增。返回的是Map结构
- get(key)  获取key对应的键值，如果找到key返回key的value，找不到返回undefined
- has(key) 用于检测Map成员是否包含键，存在返回true，不存在返回false
- delete(key) 删除对应的键，返回true，删除失败返回false
- clear 清空所有成员，没有返回值



##### 数组转Map

```
new Map([[true, 7], [{foo: 3}, ['abc']]])

 Map {true => 7, Object {foo: 3} => ['abc']}
```

##### Map转对象

```
function strMapToObj(strMap) {
  //1.创建对象
  let obj = {};
  //2.遍历传入进来的
  for (let [k, v] of strMap) {
  //3.设置obj[k] = v
    obj[k] = v;
  }
  //4.返回obj
  return obj;
}

let myMap = new Map().set("yes", true).set("no", false);

console.log(strMapToObj(myMap));
```



##### 对象转Map

```
function objToStrMap(obj) {
	//1.创建一个map结构
  let strMap = new Map();

	//2.遍历传入进来可以遍历的对象
  for (let k of Object.keys(obj)) {
    //3.通过strMap.set设置一个map结构
    strMap.set(k, obj[k]);
  }
  //4.返回一个map结构
  return strMap;
}
console.log(objToStrMap({ yes: true, no: false }));
```





Object.keys 返回一个给定对象的可遍历属性组成的数组



