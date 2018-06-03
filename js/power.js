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
      drawBuildingPowerSymbol(families[i].home);
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
