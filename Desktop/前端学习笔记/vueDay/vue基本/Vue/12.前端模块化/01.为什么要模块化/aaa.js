//小明写的
//es5之前的解决方法
var moduleA=(function (){
  var obj={

  }
  var name='小明';
  var flag =true;
  function sum(num1,num2){
    return num1+num2;
  }
  obj.flag=flag;
  obj.sum=sum;
  return obj;
})()


