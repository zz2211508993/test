//小明写的
// ES6的模块化写法
let name='小明';
let flag=true;
function sum(num1,num2){
  return num1 + num2;
}
//1.第一种导出的写法
export {name,flag,sum};
//2.第二种导出的写法,直接在导出的时候，定义变量
// export var name ='陈';
// export var flag =true;
//3.还可以导入函数/类
// export function sum(num1,num2){return num1 + num2;};
// export class Person{
//   run(){
//     console.log('跑')
//   }
// }
//4.export default 导入不写名字，让使用者直接传入名字，一个js文件只能出现一个
// export default {
//   name,flag,sum
// }








