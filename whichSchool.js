let bethanyAge = Math.round(Math.random() * 4) + 13
let danyAge = Math.round(Math.random() * 12)
let mariaAge = Math.round(Math.random() * 52) + 18

let schoolAge = [13,19];

// Replace the placeholders with your own if conditions for each person.

// Conditions for Bethany
if(bethanyAge < schoolAge[0]){
  console.log("Bethany should go to Elementary School")
} else if(bethanyAge < schoolAge[1]){
  console.log("Bethany should go to High School")
} else {
  console.log("Bethany should go to Lighthouse Labs")
}

// Conditions for Dany
if(danyAge < schoolAge[0]){
  console.log("Dany should go to Elementary School")
} else if(danyAge < schoolAge[1]){
  console.log("Dany should go to High School")
} else {
  console.log("Dany should go to Lighthouse Labs")
}

// Conditions for Maria
if(mariaAge < schoolAge[0]){
  console.log("Maria should go to Elementary School")
} else if(mariaAge < schoolAge[1]){
  console.log("Maria should go to High School")
} else {
  console.log("Maria should go to Lighthouse Labs")
}