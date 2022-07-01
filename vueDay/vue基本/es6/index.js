const arr = [{ text: 1 }, { text: 2 }, { text: 3 }, { text: 2 }];
let newArr = [];

arr.forEach((arrItem, index) => {
  console.log(index);
  console.log(newArr);
  const isExist = newArr.find((tempItem, index) => {
    // console.log(arrItem);
    // console.log(index);
    console.log(tempItem); //1 ===2 2===2 1===3 2===3 3
    return tempItem.text === arrItem.text;
  });

  //[] === 1 push 1 === 1 2
  !isExist && newArr.push(arrItem);
});
