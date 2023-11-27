
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