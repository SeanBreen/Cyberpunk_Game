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
  if (withinGrid() && getCurrentTile()[3] != 0 && player.holding[0] == [0]) {
    var type = getCurrentTile()[3].type;
    var pos = getArrayPos(getCurrentTile()[3].pos[0],getCurrentTile()[3].pos[1]);
    pos = [parseInt(pos.toString()[0]),parseInt(pos.toString()[1])];
    var range = 0;
    switch(type) {
      case 1:
        range = 1;
        break;
      default:
        range = 0;
        break;
    }
    var startX = window.innerWidth/2-(tileSize*5)+(tileSize*pos[0]);
    var startY = window.innerHeight/2-(tileSize*5)+(tileSize*(pos[1]-1));
    ctx.fillStyle = "rgba(214,203,51,0.5)";
    ctx.fillRect(startX-(range*tileSize),startY-(range*tileSize),tileSize*2+(tileSize*range),tileSize*2+(tileSize*range));
    console.log("drawing range at X:"+startX+" Y:"+startY);
  }
}
