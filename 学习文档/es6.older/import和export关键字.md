### ES6使用export 和import关键字

- ES6定义了Modules实现模块化
- export 导出 import 导入

##### 1.导出的几种方式

- ###### 1.使用es6的解构赋值导出

- ```
  export {name,flag,sum};
  ```

- ###### 2.导出并且定义变量

- ```
  // export var name ='陈';
  // export var flag =true;
  ```

- ###### 3.还可以导出函数和类

- ```
  export function sum(num1,num2){return num1 + num2;};
  // export class Person{
  //   run(){
  //     console.log('跑')
  //   }
  // }
  ```


- ###### 4.还可以给导出的添加别名

- ```
  export {name as n}
  ```

- ###### 5.export default 导入不写名字，让使用者直接传入名字，一个js文件只能出现一个

- ```
  export default {
     name,flag,sum
   }
  ```

##### 2.导入的几种方式

- ###### 1.第一种导入的方式

```
import {name,flag} from './aaa.js'
```

- 2.第二种导入的格式，用于导出默认的export default的

- ```
  import aaa from './aaa.js'  aaa是自己定义的名字，用于接收 './aaa.js'传进来的参数
  ```

  


##### 3.import 和export的注意点

- import 必须写在代码最顶部，因为import必须在解析阶段就知道依赖关系，不能在代码运行阶段写

- 要想写只能通过import()

- import 和export 后面的{} 不是一个对象，可以设置别名 不能是属性名属性值

- ```
  export {name as n}
  ```

  

##### 4.ESModule的加载过程

- 导出的地方是可以修改name的，因为是对象（指向模块环境记录），并且会创建模块环境记录，拿到实时最新的数据

- 还有就是如果name被修改，会重新创建一个const name = name

  ```
  let name = "chen"; 
  
  let name = {
  	name:'chensss'
  }
  
  let age = 18;
  
  // setTimeout(() => {
  //   name = "12123"; //可以修改
  // }, 1000);
  
  setTimeout(() => {
    console.log(name.name);
  }, 2000);
  
  export { name, age };
  // export default name;
  ```

  

- 导入的地方是不能修改name的,  因为修改的是模块环境记录中的name是一个const

- 因为解构赋值所以拿到的是const name = name 所以修改不了

- 如果name 是一个对象，就可以修改，因为修改的是对象的引用中的值

  ```
  // 演练: export和import结合使用
  import { name, age } from "./module/foo.js";
  
  setTimeout(() => {
    //不能修改，拿到的是
    name.name = "112";
  }, 1000);
  
  console.log(name);
  
  ```

  

![1653744516740](C:\Users\18367\AppData\Roaming\Typora\typora-user-images\1653744516740.png)

