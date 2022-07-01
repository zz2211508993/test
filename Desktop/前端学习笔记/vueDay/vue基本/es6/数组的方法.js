// const arr = ["a", "b", "c", "d", "e", "f"];

// console.log(arr.slice());
// console.log(arr.slice(2)); //从索引为2的位置开始，截取至末尾
// console.log(arr.slice(-2)); //截取末尾两个
// console.log(arr.slice(2, 4)); //截取第二个-第四个 不包含第四个
// console.log(arr.slice(4, 2));

// const str = "1,2,3,4";

// const newArr = str.split(",");

// console.log(newArr);

// const arr = [1, 2, 3, 4];

// const str = arr.join("-");

// console.log(str);

var arr1 = ["a", "b", "c", "d", "e", "f"];
// console.log(arr1.splice(1)); //从第index为1的位置开始，删除元素

// console.log(arr1.splice(-2)); 删除最后两个元素

// console.log(arr1.splice(1, 3)); 从index为1的位置开始删除元素，一共删除3个

console.log(arr1.splice(1, 0, "g")); //增加

console.log(arr1.splice(1, 3, "js", "vue")); //更改
console.log(arr1);
