### 容易搞混的方法



slice 截取数组或者字符串

- 返回一个新数组

- 不会改变原数组

  - 不传参数截取所有
  - 第一个参数:从哪里开始截取 -x 截取末尾x个
  - 第二个参数:  截取到哪里 不包含尾部
  - slice会将伪数组，转换为真数组

  ```
  console.log(arr.slice()); 
  console.log(arr.slice(2)); //从索引为2的位置开始，截取至末尾
  console.log(arr.slice(-2)); //截取末尾两个
  console.log(arr.slice(2, 4)); //截取第二个-第四个 不包含第四个
  console.log(arr.slice(4, 2));
  ```

splice 数组增删查改 会改变原数组

- 第一个参数 代表从什么位置开始删除    - 个代表删除最后-个       

- 第二个参数  删除的数量   

- 第三个参数 新增    

  - 传一个代表  从哪里开始删除
  - 传两个代表  从什么位置，删除n个
  - 传三个代表  代表新增 如果有了代表更改

- ```
  var arr1 = ["a", "b", "c", "d", "e", "f"];
  console.log(arr1.splice(1)); //从第index为1的位置开始，删除元素
  console.log(arr1.splice(-2)); 删除最后两个元素
  console.log(arr1.splice(1, 3)); 从index为1的位置开始删除元素，一共删除3个
  console.log(arr1.splice(1, 0, "g")); //增加
  console.log(arr1.splice(1, 3, "js", "vue")); //更改
  ```

  

split 将字符串拆分成数组

- 以分隔符拆分

- ```
  const str = "1,2,3,4";
  const newArr = str.split(",");
  ```

join  将数组拆分成字符串

- 以什么连接符作为字符串的分割

- ```
  const arr = [1, 2, 3, 4];
  const str = arr.join("-");
  ```

  



