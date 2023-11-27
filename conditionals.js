const age = 17;
const isCitizen = false;

if(isCitizen && age>=18){
  console.log("You are eligible to vote.");
}else if(!isCitizen){
  console.log("You are not a citizen");
}else if(age<18){
  console.log("You are too young to vote.");
}