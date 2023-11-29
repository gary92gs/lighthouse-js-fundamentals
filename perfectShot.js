const finalPosition = function (moves){
  let currentPos = [0,0]
  for(const move of moves){
    if(move === 'north'){
      currentPos[1]++;
    }else if(move === 'south'){
      currentPos[1]--;
    }else if(move === 'east'){
      currentPos[0]++;
    }else if(move === 'west'){
      currentPos[0]--;
    }
  }
  return currentPos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(moves));