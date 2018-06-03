var level = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,1,1,0,0,0,0,
  0,0,0,0,1,1,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

var roads = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

var buildings = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

var power = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

var population = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

//Get the position in the level array given BLOCK co-ords eg x = 3, y = 2 would return 12
function getArrayPos(x,y) {
  var arrayPos = (y*Math.sqrt(level.length))-(Math.sqrt(level.length)-x)-1;
  return arrayPos;
}

//Get the position in the level array given the mouse co-ords;
function getArrayPosFromMouse() {
  var x = Math.floor((mouse[0]-initialStartX)/tileSize)+1;
  var y = Math.floor((mouse[1]-initialStartY)/tileSize)+1;
  var arrayPos = (y*Math.sqrt(level.length))-(Math.sqrt(level.length)-x)-1;
  return arrayPos;
}

//Get int value of current tile in array
function getCurrentTile() {
  if (mouse[0]>=initialStartX && mouse[0] < (tileSize*10)+initialStartX && mouse[1]>=initialStartY && mouse[1] < (tileSize*10)+initialStartY ) {
    var x = Math.floor((mouse[0]-initialStartX)/tileSize)+1;
    var y = Math.floor((mouse[1]-initialStartY)/tileSize)+1;
    var arrayPos = getArrayPos(x,y);
    return [level[arrayPos].type,roads[arrayPos].type,buildings[arrayPos]];
  }
}

//Return road in a certain direction from a given position
function getRoad(direction,currentPos) {
  switch(direction) {
    case "up":
      currentPos-=10;
      break;
    case "right":
      currentPos+=1;
      break;
    case "down":
      currentPos+=10
      break;
    case "left":
      currentPos-=1;
      break;
  }
  if (currentPos < 0 || currentPos > 99) {
    return false;
  } else {
    if (roads[currentPos] != 0) {
      return true;
    }
  }

}

//Changes value in given array at a given pos
function changeArrayValue(pos,value,type) {
  if (type == "r") {
    roads[pos] = value;
  } else if (type == "l") {
    level[pos] = value;
  } else if (type == "b") {
    buildings[pos] = value;
  } else if(type == "p") {
    power[pos] = value;
  }
}

//Check if current mousePos is within the grid
function withinGrid() {
  if (getCurrentTile() != undefined) {
    return true;
  } else {
    return false;
  }
}

function createInitialWorldObjects() {
  for (i=0;i<level.length;i++) {
    var tile = new Sprite(getTextureName(level[i],"l"));
    tile.type = [level[i]];
    level[i] = tile;
  }
}

function createInitialRoadObjects() {
  for (i=60;i<70;i++) {
    var road = new Road(getTextureName(1,"r"));
    roads[i] = road;
  }
  mergeRoad();
}
