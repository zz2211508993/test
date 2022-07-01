// const set = new Set();

// set.add("123");

// console.log(set.delete("444"));

// set.add("12334");

// console.log(set.has("123"));

// console.log(set);

// console.log(set.keys());

const map = new Map();
// map.set("name", "sss");
// console.log(map.set("name", "chen"));
// console.log(map.get("name"));

// console.log(map.has("name"));

// const a = new Map([
//   [true, 7],
//   [{ foo: 3 }, ["abc"]],
// ]);

// console.log(a);

// function objToStrMap(obj) {
//   let strMap = new Map();

//   for (let k of Object.keys(obj)) {
//     strMap.set(k, obj[k]);
//   }
//   return strMap;
// }

// console.log(objToStrMap({ yes: true, no: false }));

function strMapToObj(strMap) {
  let obj = {};
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

let myMap = new Map().set("yes", true).set("no", false);

console.log(strMapToObj(myMap));
