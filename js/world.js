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
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [2,0],[2,0],[2,0],[2,0],[2,0],[2,0],[2,0],[2,0],[2,0],[2,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]
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
    return [level[arrayPos],roads[arrayPos],buildings[arrayPos]];
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
    return 0;
  } else {
    return roads[currentPos][0];
  }

}

//Changes value in given array at a given pos
function changeArrayValue(pos,value,type) {
  if (type == "r") {
    roads[pos][0] = value;
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
