const chooseStations = function(stations){
  let acceptedStations = [];
  for (const station of stations) {
    if(station[1] >= 20){
      if(station[2] === 'school' || station[2] === 'community centre'){
        acceptedStations.push(station[0]);
      }
    }
  }
  return acceptedStations;
}

const stations = [
  ['Big Bear Donair',10,'restaurant'],
  ['Bright Lights Elementary',50,'school'],
  ['Moose Mountain Community Centre',45,'community centre']
]

console.log(chooseStations(stations));
