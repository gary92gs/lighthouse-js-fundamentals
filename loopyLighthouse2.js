const loopyLighthouse = function (range, multiples, words){
  for (let i = range[0]; i <= range[1]; i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0){
      console.log(words[0]);
    } else if (i % multiples[1] === 0){
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15,90],[2,5],['Batty','Beacon']);

/* CODE FROM LOOPY LIGHTHOUSE 1 EXERCISE
for(let loopNum = 100; loopNum <= 200;loopNum++){
  if(loopNum % 3 === 0 && loopNum % 4 === 0){
    console.log("LoopyLighthouse");
  }else if(loopNum % 3 === 0){
    console.log("Loopy");
  }else if(loopNum % 4 === 0){
    console.log("Lighthouse");
  }else{
    console.log(loopNum);
  }
}
*/