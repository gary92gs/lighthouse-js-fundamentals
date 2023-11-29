let arr1 = [ 1, 2, 3 ];
let arr2 = [ 4, 5, 6 ];

const concat = function (array1, array2){
  let tmpArray = [];
  for (let i = 0; i < array1.length; i++) {
    tmpArray.push(array1[i]); 
  }
  for (let i = 0; i < array2.length; i++) {
    tmpArray.push(array2[i]);
  }
  return tmpArray;
}

console.log(concat(arr1, arr2));
