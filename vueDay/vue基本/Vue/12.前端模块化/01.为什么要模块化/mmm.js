//小明写的另一个js
//输出flag发现不是false，并且name不是输出小明，同名变量覆盖
if(moduleA.flag) {
  console.log('小明真不错')
}
console.log(moduleB.name);
console.log(moduleA.sum(10,20));