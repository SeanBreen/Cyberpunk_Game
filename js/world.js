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
  1,1,1,1,1,1,1,1,1,1,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

function getArrayPos(x,y) {
  var arrayPos = (y*Math.sqrt(level.length))-(Math.sqrt(level.length)-x)-1;
  return arrayPos;
}

//Get int value of current tile in array
function getCurrentTile() {
  if (mouse[0]>=initialStartX && mouse[0] < (tileSize*10)+initialStartX && mouse[1]>=initialStartY && mouse[1] < (tileSize*10)+initialStartY ) {
    var x = Math.floor((mouse[0]-initialStartX)/tileSize)+1;
    var y = Math.floor((mouse[1]-initialStartY)/tileSize)+1;
    var arrayPos = getArrayPos(x,y);
    return [level[arrayPos],roads[arrayPos]];
  }
}

function changeTile(tile) {

}

//Check if current mousePos is within the grid
function withinGrid() {
  if (getCurrentTile() != undefined) {
    return true;
  } else {
    return false;
  }
}
