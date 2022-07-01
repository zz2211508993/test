//小明写的另一个js
//输出flag发现不是false，并且name不是输出小明，同名变量覆盖
//第一种导入的格式,要使用谁就导入谁使用name flag就导入{name,flag}
import {name,flag} from './aaa.js'
//第二种导入的格式，用于导出默认的export default的
// import aaa from './aaa.js'
// if(flag) {
//   console.log('小明真不错')
// }
console.log(name);
console.log(flag)
// let p=new Person();
// p.run();
// console.log(aaa.name)
// console.log(aaa.flag)
// console.log(aaa.sum(10,20))