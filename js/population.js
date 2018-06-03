var totalPopulation = 0;

//Update the population for all tiles on the grid
function updatePopulation() {
  for (i=0;i<families.length;i++) {
    var tilePopulation = 0;
    tilePopulation+=families[i]["adults"].length;
    tilePopulation+=families[i]["children"].length;
    population[families[i]["home"]] = tilePopulation;
    totalPopulation+=tilePopulation;
  }
}

function checkHousesForPower() {
  var directions = [-11,-10,-9,-1,1,9,10,11];
  var noPowerPlants = 0;
  for (i=0;i<families.length;i++) {
    for (j=0;j<directions.length;j++) {
      if (power[families[i].home+directions[j]] != 0) {
        noPowerPlants++;
      }
    }
    if (noPowerPlants == 0) {
      
      drawPowerSymbol(families[i].home);
      for (j=0;j<families[i]["adults"].length;j++) {
        families[i]["adults"][j].happiness-=0.0001;
      }
      for (j=0;j<families[i]["children"].length;j++) {
        families[i]["children"][j].happiness-=0.0001;
      }
    } else {
      buildings[families[i].home].turnOn();
    }
    noPowerPlants = 0;
  }

}
