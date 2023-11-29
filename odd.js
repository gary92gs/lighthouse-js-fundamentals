const isOdd = function (number){
  return number % 2 === 0;
}

const numbers = [2,4,3,1]

for (const num of numbers) {
  console.log(isOdd(num));
}