// let x = 5;
// const fn = function fn(x) {
//   return function (y) {
//     console.log(y + ++x);
//   };
// };

// let f = fn(6);
// f(7); // y

// fn(8)(9); //x y

// f(10); //11x y7

// var value = 1;

// function foo() {
//   console.log(value);
// }

// function bar() {
//   var value = 2;
//   foo();
// }

// bar();

// 单例模式
// function Singleton() {
//   this.data = "singleton";
// }

// Singleton.getInstance = (function () {
//   var instance;

//   return function () {
//     console.log(instance);
//     if (instance) {
//       return instance;
//     } else {
//       instance = new Singleton();
//       return instance;
//     }
//   };
// })();

// var sa = Singleton.getInstance();
// var sb = Singleton.getInstance();
// console.log(sa === sb); // true
// console.log(sa.data); // 'singleton'

// 模拟私有属性
function getGeneratorFunc() {
  var _name = "John";
  var _age = 22;
  let _gender = "男";

  return function () {
    return {
      getName: function () {
        return _name;
      },
      getAge: function () {
        return _age;
      },
      getGender() {
        return _gender;
      },
    };
  };
}

var obj = getGeneratorFunc()();
console.log(obj.getName()); // John
console.log(obj.getAge()); // 22
console.log(obj.getGender());
// console.log(obj._age); // undefined
// console.log(obj._age ?? "123");
