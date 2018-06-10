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

function drawPowerPlantRange() {
  if (withinGrid() && getCurrentTile()[3] != 0 && player.holding == 0) {
    var type = getCurrentTile()[3].type;
    var pos = [getCurrentTile()[3].pos[0],getCurrentTile()[3].pos[1]];
    var diameter = 0;
    switch(type) {
      case 1:
        diameter = 3;
        break;
      default:
        diameter = 0;
        break;
    }
    var startX = pos[0]-(tileSize*Math.floor(diameter/2));
    var startY = pos[1]-(tileSize*Math.floor(diameter/2));
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgba(214,203,51,0.5)";
    ctx.fillRect(startX,startY,diameter*tileSize,diameter*tileSize);
    ctx.strokeRect(startX,startY,diameter*tileSize,diameter*tileSize);
  }
}
