// const arr = [1, 2, 3, 4];

// const result = arr.map((item) => item * 2);

// console.log(result);

// let currentItem = 0;

// const result = arr.forEach((item, index, array) => {
//   currentItem += item * 2;
// });

// console.log(currentItem);

// const result = arr.reduce((pre, value, index, array) => {
//   return (pre += value);
// }, 0);

// console.log(result);

// const result = arr.filter((item, index, array) => {
//   return item >= 2;
// });

// const result = arr.find((item, index, array) => {
//   return item >= 2;
// });

// console.log(result);

// const result = arr.findIndex((item, index, array) => {
//   return item >= 2;
// });

const arr = [2, 3, -1, 1, 8];

const result = arr.sort((a, b) => {
  return b - a;
});

console.log(arr);
console.log(result);
