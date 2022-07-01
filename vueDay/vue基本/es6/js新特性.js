// let customer = {
//   name: "Carl",
//   details: { age: 82 },
//   city: "123",
// };
// let customerCity = customer?.city ?? "zz";
// console.log(customerCity); // “zz”

// let obj = {
//   name: "chen",
//   age: 18,
//   city: "hhh111",
// };

// let objCity = obj?.city ?? "hhh";

// console.log(objCity); //

// (null || undefined) ?? "foo"; // 抛出 SyntaxError
// true || undefined ?? "foo"; // 抛出 SyntaxError

// var a = 10;
// function foo() {
//   console.log(a);
//   var a = 20;
// }
// foo();

// var array = [];
// for (var i = 0; i < 3; i++) {
//   array.push(() => i);
// }
// var newArray = array.map((el) => el());
// console.log(newArray); //

// console.log("global");

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
//   console.log(i);
// }

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("then1");
// });

// setTimeout(function () {
//   console.log("timeout2");
//   new Promise(function (resolve) {
//     console.log("timeout2_promise");
//     resolve();
//   }).then(function () {
//     console.log("timeout2_then");
//   });
// }, 1000);

// setTimeout(function () {
//   console.log(1);
// });
// new Promise(function (resolve, reject) {
//   console.log(2);
//   resolve(3);
// }).then(function (val) {
//   console.log(val);
// });
// console.log(4);

// console.log("script start");

// async function async1() {
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2 end");
//   return Promise.resolve().then(() => {
//     console.log("async2 end1");
//   });
// }
// async1();

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// new Promise((resolve) => {
//   console.log("Promise");
//   resolve();
// })
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });

// console.log("script end");

// let str = "123";
// const a = str;

// str = "121212";
// console.log(a);

// const obj = {
//   name: "chen",
// };
// const obj1 = obj;

// obj1.name = "123";

// console.log(obj, obj1);

// const obj = {
//   name: "chen",
//   age: 18,
//   sex: "男",
// };
//null 或者undefined
// true
// const objSex = obj?.sex ?? "123";
// const objSex = obj.sex ? obj.sex : "123";

// const objSex = obj.sex;

// console.log(objSex);
