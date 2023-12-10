const judgeVegetable = function (listVeg, characteristic){
  let highScore = 0;
  let winner = {};
  for (const veg of listVeg){
    console.log(veg);
    if (veg[characteristic] > highScore){
      highScore = veg[characteristic];
      winner = veg;
    }
  }
  return winner.submitter;
}

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];
const metric = "plumpness";

console.log(judgeVegetable(vegetables, metric));