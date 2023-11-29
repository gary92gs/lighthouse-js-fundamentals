const range = function (start, end, step){
  const tmpArray = [];
  if (step >= 0){
    for (let i = start; i <= end; i += step){
      tmpArray.push(i);
    }
  }
  return tmpArray;
}

console.log(range(0,10,-5));