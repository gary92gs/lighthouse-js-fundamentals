const merge = function (array1, array2){
  let numReviews = array1.length + array2.length;
  let resultArray = [];
  for (let i = 0; i < numReviews; i++){
    if (array1[0] === undefined){
      resultArray.push(array2.shift());
    }else if (array2[0] === undefined){
      resultArray.push(array1.shift());
    }else if (array1[0] <= array2[0]) {
      resultArray.push(array1.shift());
    } else if (array1[0] > array2[0]){
      resultArray.push(array2.shift());
    }
  }
  return resultArray
}

let arr1 = [ 4, 5, 6 ];
let arr2 = [ 1, 2, 3, 4 ];
let arr3 = [ 4 ];
let arr4 = [ 2, 5, 8 ];
let arr5 = [ 1, 2, 6 ];
let arr6 = [];

console.log(merge(arr4,arr2));